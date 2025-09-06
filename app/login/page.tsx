"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, Mail, Lock, Eye, EyeOff, Crown, Sparkles } from "lucide-react"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login data:", formData)
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
          <p className="text-gray-600 mt-4 text-lg">سجل دخولك لمتابعة رحلتك</p>
        </div>

        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-xl overflow-hidden">
          <CardHeader className="text-center bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white py-8 relative">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium mb-4">
                <Sparkles className="h-4 w-4 ml-2" />
                أهلاً بعودتك
              </div>
              <CardTitle className="text-3xl font-bold">تسجيل الدخول</CardTitle>
              <CardDescription className="text-amber-100 text-lg mt-2">
                استكمل مشاريعك وابدأ تشكيل نصوص جديدة
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
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
                <Label htmlFor="password" className="text-right flex items-center text-lg font-medium">
                  <Lock className="h-5 w-5 ml-2 text-amber-600" />
                  كلمة المرور
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="أدخل كلمة المرور"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="text-right h-12 text-lg border-2 border-gray-200 focus:border-amber-500 rounded-xl bg-white/50 backdrop-blur-sm pl-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-amber-600 transition-colors duration-300"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <Checkbox
                    id="remember"
                    checked={formData.rememberMe}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, rememberMe: checked as boolean }))}
                  />
                  <Label htmlFor="remember" className="text-gray-700 font-medium">
                    تذكرني
                  </Label>
                </div>
                <Link href="/forgot-password" className="text-amber-700 hover:text-amber-800 font-medium underline">
                  نسيت كلمة المرور؟
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white py-4 text-xl font-medium shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl"
              >
                تسجيل الدخول
                <ArrowRight className="mr-3 h-6 w-6" />
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600 text-lg">
                ليس لديك حساب؟{" "}
                <Link href="/register" className="text-amber-700 hover:text-amber-800 font-bold underline">
                  إنشاء حساب جديد
                </Link>
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <p className="text-gray-600 mb-6 text-lg">أو سجل الدخول باستخدام</p>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="h-12 bg-white/50 backdrop-blur-sm border-2 border-gray-200 hover:border-amber-300 hover:bg-amber-50 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Google
                  </Button>
                  <Button
                    variant="outline"
                    className="h-12 bg-white/50 backdrop-blur-sm border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </Button>
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
