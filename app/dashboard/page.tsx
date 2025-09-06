"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Upload,
  FileText,
  Download,
  History,
  CreditCard,
  Settings,
  LogOut,
  User,
  CheckCircle,
  Clock,
  AlertCircle,
  Trash2,
  Crown,
  Sparkles,
  TrendingUp,
  Award,
  Zap,
} from "lucide-react"

export default function DashboardPage() {
  const router = useRouter()
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type === "application/pdf") {
      setSelectedFile(file)
      setIsProcessing(true)
      // Automatically redirect to workflow when file is selected
      setTimeout(() => {
        router.push(`/workflow?file=${encodeURIComponent(file.name)}`)
      }, 1500)
    }
  }

  const recentFiles = [
    { id: 1, name: "كتاب الأدب العربي.pdf", pages: 25, status: "completed", date: "2024-01-15", cost: "50 ج.م" },
    { id: 2, name: "مقال صحفي.pdf", pages: 3, status: "processing", date: "2024-01-14", cost: "6 ج.م" },
    { id: 3, name: "رسالة ماجستير.pdf", pages: 120, status: "completed", date: "2024-01-13", cost: "240 ج.م" },
    { id: 4, name: "قصة قصيرة.pdf", pages: 8, status: "failed", date: "2024-01-12", cost: "0 ج.م" },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-emerald-500" />
      case "processing":
        return <Clock className="h-4 w-4 text-amber-500" />
      case "failed":
        return <AlertCircle className="h-4 w-4 text-red-500" />
      default:
        return null
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "مكتمل"
      case "processing":
        return "قيد المعالجة"
      case "failed":
        return "فشل"
      default:
        return status
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-emerald-100 text-emerald-800 border-emerald-200"
      case "processing":
        return "bg-amber-100 text-amber-800 border-amber-200"
      case "failed":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50/20 to-orange-50/30 relative overflow-hidden"
      dir="rtl"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-amber-200/10 to-orange-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-rose-200/10 to-amber-200/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-white/80 backdrop-blur-xl border-b shadow-sm">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6 space-x-reverse">
              <Link href="/" className="flex items-center space-x-3 space-x-reverse group">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Crown className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-amber-800 to-orange-700 bg-clip-text text-transparent mushkool-logo">
                  مَشْكُول 
                </div>
              </Link>
              <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 border-amber-200 px-3 py-1">
                <Sparkles className="h-4 w-4 ml-1" />
                لوحة التحكم
              </Badge>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <Button variant="ghost" size="sm" className="hover:bg-amber-50 text-gray-700 hover:text-amber-800">
                <Settings className="h-4 w-4 ml-2" />
                الإعدادات
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-red-50 text-gray-700 hover:text-red-600">
                <LogOut className="h-4 w-4 ml-2" />
                تسجيل الخروج
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8 relative z-10">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-amber-50/30 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <User className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">أحمد محمد الشريف</CardTitle>
                <CardDescription className="text-amber-600 font-medium">ahmed@example.com</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                  <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">
                    150 ج.م
                  </div>
                  <div className="text-sm text-gray-600 font-medium">الرصيد المتاح</div>
                </div>
                <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <CreditCard className="h-4 w-4 ml-2" />
                  شحن الرصيد
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-emerald-50/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <TrendingUp className="h-5 w-5 ml-2 text-emerald-600" />
                  إحصائيات سريعة
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg">
                  <span className="text-gray-700 font-medium">الملفات المعالجة</span>
                  <span className="font-bold text-emerald-600 text-lg">156</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                  <span className="text-gray-700 font-medium">إجمالي الصفحات</span>
                  <span className="font-bold text-blue-600 text-lg">2,340</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg">
                  <span className="text-gray-700 font-medium">المبلغ المنفق</span>
                  <span className="font-bold text-amber-600 text-lg">4,680 ج.م</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-purple-50/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Award className="h-5 w-5 ml-2 text-purple-600" />
                  إنجازاتك
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center p-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center ml-3">
                    <Crown className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">عضو مميز</div>
                    <div className="text-xs text-gray-500">أكثر من 100 ملف</div>
                  </div>
                </div>
                <div className="flex items-center p-2 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center ml-3">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">سرعة البرق</div>
                    <div className="text-xs text-gray-500">معالجة سريعة</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Upload Section */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-amber-50/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Upload className="h-6 w-6 ml-3 text-amber-600" />
                  رفع ملف جديد
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  ارفع ملف PDF للحصول على النص مشكولاً بالكامل باستخدام أحدث تقنيات الذكاء الاصطناعي
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-2 border-dashed border-amber-300 rounded-2xl p-12 text-center hover:border-amber-400 hover:bg-amber-50/30 transition-all duration-300 bg-gradient-to-br from-amber-50/20 to-orange-50/20">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Upload className="h-8 w-8 text-white" />
                    </div>
                    <div className="space-y-4">
                      <p className="text-2xl font-bold text-gray-900">اسحب وأفلت ملف PDF هنا</p>
                      <p className="text-gray-600 text-lg">أو انقر لاختيار ملف من جهازك</p>
                      <Input
                        type="file"
                        accept=".pdf"
                        onChange={handleFileSelect}
                        className="hidden"
                        id="file-upload"
                      />
                      <Label htmlFor="file-upload">
                        <Button
                          variant="outline"
                          className="cursor-pointer bg-white/80 backdrop-blur-sm border-2 border-amber-300 hover:bg-amber-50 hover:border-amber-400 text-amber-800 font-medium px-8 py-3 text-lg"
                          asChild
                        >
                          <span>اختيار ملف PDF</span>
                        </Button>
                      </Label>
                      <p className="text-sm text-gray-500 mt-4">
                        سيتم توجيهك تلقائياً إلى المعالج الذكي بعد اختيار الملف
                      </p>
                    </div>
                  </div>

                  {isProcessing && selectedFile && (
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 shadow-lg">
                      <div className="flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <Sparkles className="h-6 w-6 text-white animate-pulse" />
                          </div>
                          <p className="font-bold text-lg text-gray-900 mb-2">جاري التوجيه إلى المعالج الذكي...</p>
                          <p className="text-blue-600 font-medium">تم اختيار: {selectedFile.name}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Recent Files */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-blue-50/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <History className="h-6 w-6 ml-3 text-blue-600" />
                  الملفات الأخيرة
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  تاريخ الملفات التي تم معالجتها مؤخراً مع إمكانية التحميل والإدارة
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentFiles.map((file) => (
                    <div
                      key={file.id}
                      className="flex items-center justify-between p-6 border-0 rounded-2xl hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-white to-gray-50/50 shadow-md"
                    >
                      <div className="flex items-center space-x-4 space-x-reverse">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                          <FileText className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-lg text-gray-900">{file.name}</p>
                          <p className="text-gray-600 font-medium">
                            {file.pages} صفحة • {file.date}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 space-x-reverse">
                        <Badge className={`${getStatusColor(file.status)} border font-medium px-3 py-1`}>
                          <div className="flex items-center">
                            {getStatusIcon(file.status)}
                            <span className="mr-2">{getStatusText(file.status)}</span>
                          </div>
                        </Badge>
                        <span className="text-lg font-bold text-amber-600">{file.cost}</span>
                        <div className="flex space-x-2 space-x-reverse">
                          {file.status === "completed" && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="bg-emerald-50 border-emerald-200 hover:bg-emerald-100 text-emerald-700"
                            >
                              <Download className="h-4 w-4" />
                            </Button>
                          )}
                          {file.status === "processing" && (
                            <Link href="/workflow">
                              <Button
                                size="sm"
                                variant="outline"
                                className="bg-amber-50 border-amber-200 hover:bg-amber-100 text-amber-700"
                              >
                                <Sparkles className="h-4 w-4" />
                              </Button>
                            </Link>
                          )}
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-red-50 border-red-200 hover:bg-red-100 text-red-600"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
