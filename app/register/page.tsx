"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, Mail, Lock, User, Phone, Crown, Sparkles, Gift } from "lucide-react"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Registration data:", formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50/30 to-orange-50/50 flex items-center justify-center p-6 relative overflow-hidden"
      dir="rtl"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-amber-200/20 to-orange-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-rose-200/20 to-amber-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-lg relative z-10">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center space-x-3 space-x-reverse group">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:rotate-3">
              <Crown className="h-7 w-7 text-white" />
            </div>
            <div className="text-4xl font-bold bg-gradient-to-r from-amber-800 to-orange-700 bg-clip-text text-transparent mushkool-logo">
              مَشْكُول 
            </div>
          </Link>
          <p className="text-gray-600 mt-4 text-lg">انضم إلى آلاف المستخدمين الراضين</p>
        </div>

        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-xl overflow-hidden">
          <CardHeader className="text-center bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white py-8 relative">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium mb-4">
                <Gift className="h-4 w-4 ml-2" />
                عرض خاص للأعضاء الجدد
              </div>
              <CardTitle className="text-3xl font-bold">مرحباً بك في شكلي</CardTitle>
              <CardDescription className="text-amber-100 text-lg mt-2">
                أنشئ حسابك واحصل على 5 صفحات مجانية
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="name" className="text-right flex items-center text-lg font-medium">
                  <User className="h-5 w-5 ml-2 text-amber-600" />
                  الاسم الكامل
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="أدخل اسمك الكامل"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="text-right h-12 text-lg border-2 border-gray-200 focus:border-amber-500 rounded-xl bg-white/50 backdrop-blur-sm"
                  required
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="email" className="text-right flex items-center text-lg font-medium">
                  <Mail className="h-5 w-5 ml-2 text-amber-600" />
                  البريد الإلكتروني
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="text-right h-12 text-lg border-2 border-gray-200 focus:border-amber-500 rounded-xl bg-white/50 backdrop-blur-sm"
                  required
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="phone" className="text-right flex items-center text-lg font-medium">
                  <Phone className="h-5 w-5 ml-2 text-amber-600" />
                  رقم الهاتف
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+20 123 456 789"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="text-right h-12 text-lg border-2 border-gray-200 focus:border-amber-500 rounded-xl bg-white/50 backdrop-blur-sm"
                  required
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="password" className="text-right flex items-center text-lg font-medium">
                  <Lock className="h-5 w-5 ml-2 text-amber-600" />
                  كلمة المرور
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="أدخل كلمة مرور قوية"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="text-right h-12 text-lg border-2 border-gray-200 focus:border-amber-500 rounded-xl bg-white/50 backdrop-blur-sm"
                  required
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="confirmPassword" className="text-right flex items-center text-lg font-medium">
                  <Lock className="h-5 w-5 ml-2 text-amber-600" />
                  تأكيد كلمة المرور
                </Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="أعد إدخال كلمة المرور"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="text-right h-12 text-lg border-2 border-gray-200 focus:border-amber-500 rounded-xl bg-white/50 backdrop-blur-sm"
                  required
                />
              </div>

              <div className="flex items-start space-x-3 space-x-reverse p-4 bg-amber-50/50 rounded-xl border border-amber-200">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, agreeToTerms: checked as boolean }))}
                  className="mt-1"
                />
                <Label htmlFor="terms" className="text-gray-700 leading-relaxed">
                  أوافق على{" "}
                  <Link href="/terms" className="text-amber-700 hover:text-amber-800 font-semibold underline">
                    الشروط والأحكام
                  </Link>{" "}
                  و{" "}
                  <Link href="/privacy" className="text-amber-700 hover:text-amber-800 font-semibold underline">
                    سياسة الخصوصية
                  </Link>
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white py-4 text-xl font-medium shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl"
                disabled={!formData.agreeToTerms}
              >
                إنشاء الحساب
                <ArrowRight className="mr-3 h-6 w-6" />
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600 text-lg">
                لديك حساب بالفعل؟{" "}
                <Link href="/login" className="text-amber-700 hover:text-amber-800 font-bold underline">
                  تسجيل الدخول
                </Link>
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full text-emerald-800 font-medium mb-4">
                  <Sparkles className="h-4 w-4 ml-2" />
                  مكافآت العضوية الجديدة
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl">
                    <div className="text-2xl font-bold text-amber-600">5</div>
                    <div className="text-sm text-gray-600">صفحات مجانية</div>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl">
                    <div className="text-2xl font-bold text-emerald-600">24/7</div>
                    <div className="text-sm text-gray-600">دعم فني</div>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600">∞</div>
                    <div className="text-sm text-gray-600">تحديثات مجانية</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Link href="/" className="text-amber-700 hover:text-amber-800 font-medium text-lg underline">
            العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
    </div>
  )
}
