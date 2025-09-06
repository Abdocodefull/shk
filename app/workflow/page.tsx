"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  Crown,
  Brain,
  Zap,
  CheckCircle,
  Clock,
  Eye,
  Download,
  ArrowRight,
  Sparkles,
  Bot,
  Scan,
  RefreshCw,
  Target,
  Award,
  TrendingUp,
  Layers,
  Search,
  ArrowLeft,
} from "lucide-react"

interface WorkflowStep {
  id: string
  title: string
  description: string
  status: "pending" | "processing" | "completed" | "error"
  progress: number
  icon: React.ReactNode
  details?: string[]
}

export default function WorkflowPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [overallProgress, setOverallProgress] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)
  const [extractedText, setExtractedText] = useState("")
  const [shapedText, setShapedText] = useState("")

  const [steps, setSteps] = useState<WorkflowStep[]>([
    {
      id: "upload",
      title: "تحليل الملف",
      description: "فحص وتحليل ملف PDF المرفوع",
      status: "completed",
      progress: 100,
      icon: <Scan className="h-5 w-5" />,
      details: ["تم التحقق من صحة الملف", "تم تحديد عدد الصفحات: 25", "تم فحص جودة النص"],
    },
    {
      id: "extract",
      title: "استخراج النصوص",
      description: "استخراج النصوص العربية من الملف",
      status: "processing",
      progress: 65,
      icon: <Search className="h-5 w-5" />,
      details: ["جاري استخراج النص من الصفحة 16/25", "تم التعرف على 1,247 كلمة", "دقة الاستخراج: 98.5%"],
    },
    {
      id: "analyze",
      title: "التحليل الذكي",
      description: "تحليل النص باستخدام الذكاء الاصطناعي",
      status: "pending",
      progress: 0,
      icon: <Brain className="h-5 w-5" />,
      details: ["تحليل السياق والمعنى", "تحديد قواعد التشكيل المناسبة", "فحص الأخطاء اللغوية"],
    },
    {
      id: "shape",
      title: "تطبيق التشكيل",
      description: "تشكيل النص وفقاً لقواعد اللغة العربية",
      status: "pending",
      progress: 0,
      icon: <Zap className="h-5 w-5" />,
      details: ["تطبيق الحركات الأساسية", "تشكيل الكلمات المركبة", "مراجعة الدقة النهائية"],
    },
    {
      id: "review",
      title: "المراجعة والتحقق",
      description: "مراجعة نهائية وضمان الجودة",
      status: "pending",
      progress: 0,
      icon: <Target className="h-5 w-5" />,
      details: ["فحص الدقة النهائية", "مقارنة مع النص الأصلي", "إعداد الملف للتحميل"],
    },
  ])

  // Simulate workflow progress
  useEffect(() => {
    const interval = setInterval(() => {
      setSteps((prevSteps) => {
        const newSteps = [...prevSteps]
        const processingStep = newSteps.find((step) => step.status === "processing")

        if (processingStep) {
          processingStep.progress = Math.min(processingStep.progress + Math.random() * 15, 100)

          if (processingStep.progress >= 100) {
            processingStep.status = "completed"
            const currentIndex = newSteps.findIndex((step) => step.id === processingStep.id)
            if (currentIndex < newSteps.length - 1) {
              newSteps[currentIndex + 1].status = "processing"
              setCurrentStep(currentIndex + 1)
            } else {
              setIsCompleted(true)
            }
          }
        }

        // Calculate overall progress
        const totalProgress = newSteps.reduce((sum, step) => sum + step.progress, 0)
        setOverallProgress(totalProgress / newSteps.length)

        return newSteps
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Simulate text extraction and shaping
  useEffect(() => {
    if (steps[1].status === "processing") {
      const sampleText =
        "هذا نص تجريبي لتوضيح عملية استخراج النصوص من ملف PDF وتشكيلها باستخدام تقنيات الذكاء الاصطناعي المتطورة"
      const words = sampleText.split(" ")
      let currentText = ""

      const textInterval = setInterval(() => {
        if (currentText.split(" ").length < words.length) {
          currentText += (currentText ? " " : "") + words[currentText.split(" ").length]
          setExtractedText(currentText)
        }
      }, 200)

      return () => clearInterval(textInterval)
    }
  }, [steps])

  useEffect(() => {
    if (steps[3].status === "processing") {
      const shapedSample =
        "هَذَا نَصٌّ تَجْرِيبِيٌّ لِتَوْضِيحِ عَمَلِيَّةِ اسْتِخْرَاجِ النُّصُوصِ مِنْ مَلَفِّ PDF وَتَشْكِيلِهَا بِاسْتِخْدَامِ تِقْنِيَّاتِ الذَّكَاءِ الاصْطِنَاعِيِّ المُتَطَوِّرَةِ"
      const words = shapedSample.split(" ")
      let currentText = ""

      const shapeInterval = setInterval(() => {
        if (currentText.split(" ").length < words.length) {
          currentText += (currentText ? " " : "") + words[currentText.split(" ").length]
          setShapedText(currentText)
        }
      }, 300)

      return () => clearInterval(shapeInterval)
    }
  }, [steps])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-emerald-600 bg-emerald-100 border-emerald-200"
      case "processing":
        return "text-amber-600 bg-amber-100 border-amber-200"
      case "error":
        return "text-red-600 bg-red-100 border-red-200"
      default:
        return "text-gray-600 bg-gray-100 border-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-emerald-600" />
      case "processing":
        return <RefreshCw className="h-4 w-4 text-amber-600 animate-spin" />
      case "error":
        return <Target className="h-4 w-4 text-red-600" />
      default:
        return <Clock className="h-4 w-4 text-gray-600" />
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
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-200/10 to-purple-200/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-emerald-100/5 to-teal-100/5 rounded-full blur-3xl"></div>
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
              <Badge className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border-blue-200 px-3 py-1">
                <Bot className="h-4 w-4 ml-1" />
                معالج ذكي
              </Badge>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm" className="hover:bg-amber-50 text-gray-700 hover:text-amber-800">
                  <ArrowLeft className="h-4 w-4 ml-2" />
                  العودة للوحة التحكم
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-blue-800 font-medium mb-6">
            <Sparkles className="h-4 w-4 ml-2" />
            معالجة ذكية بالذكاء الاصطناعي
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            جاري معالجة ملفك
            <span className="block text-3xl md:text-4xl bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mt-2">
              كتاب الأدب العربي.pdf
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            يتم الآن تحليل ملفك وتشكيل النصوص باستخدام أحدث تقنيات الذكاء الاصطناعي
          </p>
        </div>

        {/* Overall Progress */}
        <Card className="mb-8 border-0 shadow-xl bg-gradient-to-r from-white to-blue-50/30 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">التقدم الإجمالي</h3>
                  <p className="text-gray-600">معالجة متقدمة بالذكاء الاصطناعي</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {Math.round(overallProgress)}%
                </div>
                <div className="text-gray-500">مكتمل</div>
              </div>
            </div>
            <Progress value={overallProgress} className="h-3 bg-blue-100" />
            <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
              <span>بدء المعالجة</span>
              <span>الانتهاء المتوقع: 3 دقائق</span>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Workflow Steps */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Layers className="h-6 w-6 ml-3 text-indigo-600" />
                  مراحل المعالجة
                </CardTitle>
                <CardDescription className="text-lg">تتبع مراحل معالجة ملفك بالتفصيل</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {steps.map((step, index) => (
                  <div key={step.id} className="relative">
                    <div
                      className={`p-6 rounded-2xl border-2 transition-all duration-500 ${
                        step.status === "processing"
                          ? "bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200 shadow-lg"
                          : step.status === "completed"
                            ? "bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200"
                            : "bg-gradient-to-r from-gray-50 to-slate-50 border-gray-200"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3 space-x-reverse">
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${
                              step.status === "processing"
                                ? "bg-gradient-to-br from-amber-500 to-orange-500"
                                : step.status === "completed"
                                  ? "bg-gradient-to-br from-emerald-500 to-teal-500"
                                  : "bg-gradient-to-br from-gray-400 to-slate-400"
                            }`}
                          >
                            <div className="text-white">{step.icon}</div>
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-gray-900">{step.title}</h4>
                            <p className="text-gray-600">{step.description}</p>
                          </div>
                        </div>
                        <Badge className={`${getStatusColor(step.status)} border font-medium px-3 py-1`}>
                          <div className="flex items-center">
                            {getStatusIcon(step.status)}
                            <span className="mr-2">
                              {step.status === "completed"
                                ? "مكتمل"
                                : step.status === "processing"
                                  ? "جاري المعالجة"
                                  : step.status === "error"
                                    ? "خطأ"
                                    : "في الانتظار"}
                            </span>
                          </div>
                        </Badge>
                      </div>

                      {step.status !== "pending" && (
                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-2">
                            <span className="font-medium">التقدم</span>
                            <span>{Math.round(step.progress)}%</span>
                          </div>
                          <Progress value={step.progress} className="h-2" />
                        </div>
                      )}

                      {step.details && step.status !== "pending" && (
                        <div className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-700">
                              <CheckCircle className="h-4 w-4 text-emerald-500 ml-2 flex-shrink-0" />
                              {detail}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {index < steps.length - 1 && (
                      <div className="flex justify-center my-4">
                        <ArrowRight
                          className={`h-6 w-6 transform rotate-90 ${
                            step.status === "completed" ? "text-emerald-500" : "text-gray-300"
                          }`}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Live Preview */}
          <div className="space-y-6">
            {/* AI Analysis */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-purple-50/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Brain className="h-5 w-5 ml-2 text-purple-600" />
                  تحليل الذكاء الاصطناعي
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-purple-800">دقة التحليل</span>
                    <span className="text-purple-600 font-bold">98.5%</span>
                  </div>
                  <Progress value={98.5} className="h-2 bg-purple-100" />
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 ml-2" />
                    تم التعرف على 1,247 كلمة
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 ml-2" />
                    تم تحديد 25 صفحة للمعالجة
                  </div>
                  <div className="flex items-center">
                    <RefreshCw className="h-4 w-4 text-amber-500 ml-2 animate-spin" />
                    جاري تحليل السياق اللغوي
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Text Preview */}
            {extractedText && (
              <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-amber-50/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Eye className="h-5 w-5 ml-2 text-amber-600" />
                    معاينة النص المستخرج
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200 text-lg leading-relaxed">
                    {extractedText}
                    <span className="animate-pulse">|</span>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Shaped Text Preview */}
            {shapedText && (
              <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-emerald-50/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Award className="h-5 w-5 ml-2 text-emerald-600" />
                    النص المشكول
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200 text-lg leading-relaxed arabic-display">
                    {shapedText}
                    <span className="animate-pulse">|</span>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Completion Actions */}
            {isCompleted && (
              <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-green-50/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg text-emerald-700">
                    <CheckCircle className="h-5 w-5 ml-2" />
                    تم الانتهاء بنجاح!
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">تم تشكيل النص بنجاح. يمكنك الآن تحميل الملف المعالج.</p>
                  <div className="space-y-3">
                    <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg hover:shadow-xl transition-all duration-300">
                      <Download className="h-4 w-4 ml-2" />
                      تحميل الملف المشكول
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full bg-white/50 border-2 border-amber-300 hover:bg-amber-50"
                    >
                      <Eye className="h-4 w-4 ml-2" />
                      معاينة النتيجة
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
