import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Zap, Shield, Users, ArrowLeft, Star, CheckCircle, Sparkles, Crown, Award } from "lucide-react"

export default function HomePage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50/30 to-orange-50/50 relative overflow-hidden landing-page"
      dir="rtl"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-amber-200/20 to-orange-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-rose-200/20 to-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-amber-100/10 to-orange-100/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 border-b bg-white/80 backdrop-blur-xl sticky top-0 shadow-sm">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-12 space-x-reverse">
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Crown className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-amber-800 to-orange-700 bg-clip-text text-transparent logo-text">
                  مَشْكُول 
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-12 space-x-reverse">
                <Link
                  href="#features"
                  className="text-gray-700 hover:text-amber-700 transition-all duration-300 font-medium relative group"
                >
                  المميزات
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-orange-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link
                  href="#pricing"
                  className="text-gray-700 hover:text-amber-700 transition-all duration-300 font-medium relative group"
                >
                  الأسعار
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-orange-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link
                  href="#about"
                  className="text-gray-700 hover:text-amber-700 transition-all duration-300 font-medium relative group"
                >
                  من نحن
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-orange-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <Link href="/login">
                <Button variant="ghost" className="text-amber-800 hover:text-amber-900 hover:bg-amber-50 font-medium">
                  تسجيل الدخول
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-medium">
                  إنشاء حساب
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-amber-800 font-medium mb-8 shadow-sm">
              <Sparkles className="h-4 w-4 ml-2" />
              الحل الأمثل لتشكيل النصوص العربية
            </div>

            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-amber-800 to-orange-700 bg-clip-text text-transparent">
                شكّل نصوصك العربية
              </span>
              <span className="block text-5xl md:text-7xl bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent mt-4">
                بذكاء اصطناعي متطور
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
              حوّل ملفات PDF إلى نصوص عربية مشكولة بالكامل باستخدام تقنيات الذكاء الاصطناعي الأكثر تطوراً في العالم
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Link href="/register">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-12 py-6 text-xl font-medium shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                >
                  ابدأ رحلتك الآن
                  <ArrowLeft className="mr-3 h-6 w-6" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-amber-300 text-amber-800 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 px-12 py-6 text-xl font-medium bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  جرب مجاناً
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <CheckCircle className="h-5 w-5 text-emerald-500 ml-2" />
                دقة 99.8% في التشكيل
              </div>
              <div className="flex items-center bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <CheckCircle className="h-5 w-5 text-emerald-500 ml-2" />
                معالجة فورية
              </div>
              <div className="flex items-center bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <CheckCircle className="h-5 w-5 text-emerald-500 ml-2" />
                أمان مطلق
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-24 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-amber-800 font-medium mb-6">
              <Award className="h-4 w-4 ml-2" />
              مميزات استثنائية
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">لماذا تختار مشكول؟</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نقدم أفضل حلول تشكيل النصوص العربية بتقنيات متقدمة وتجربة مستخدم لا مثيل لها
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-amber-50/30 backdrop-blur-sm transform hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:rotate-3">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900 font-bold">معالجة PDF ذكية</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  تقنية متطورة لاستخراج النصوص من ملفات PDF وتشكيلها بدقة عالية في ثوانٍ معدودة
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-orange-50/30 backdrop-blur-sm transform hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:rotate-3">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900 font-bold">سرعة البرق</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  خوارزميات الذكاء الاصطناعي المتقدمة تضمن معالجة فائقة السرعة مع الحفاظ على أعلى معايير الدقة
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-emerald-50/30 backdrop-blur-sm transform hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:rotate-3">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900 font-bold">حماية مطلقة</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  تشفير من الدرجة العسكرية وحماية شاملة لبياناتك مع ضمان الخصوصية التامة
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-blue-50/30 backdrop-blur-sm transform hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:rotate-3">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900 font-bold">دعم استثنائي</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  فريق خبراء متاح على مدار الساعة لتقديم الدعم الفني والمساعدة في أي وقت تحتاجه
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 py-24 bg-gradient-to-br from-gray-50 to-amber-50/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full text-emerald-800 font-medium mb-6">
              <Crown className="h-4 w-4 ml-2" />
              أسعار تنافسية
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">استثمار ذكي في المحتوى</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نظام تسعير شفاف وعادل - ادفع فقط مقابل ما تستخدمه بأفضل الأسعار في السوق
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white via-amber-50/20 to-orange-50/20 backdrop-blur-sm overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5"></div>
              <CardHeader className="relative text-center bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white rounded-t-2xl py-12">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium mb-4">
                    <Sparkles className="h-4 w-4 ml-2" />
                    العرض الأفضل
                  </div>
                  <CardTitle className="text-4xl font-bold mb-4">نظام الدفع الذكي</CardTitle>
                  <CardDescription className="text-amber-100 text-xl">
                    مرونة كاملة - لا توجد التزامات شهرية
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="relative p-12">
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center mb-4">
                    <div className="text-7xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mushkool-heading">
                      ٢
                    </div>
                    <div className="text-3xl font-bold text-gray-600 mr-2">ج.م</div>
                  </div>
                  <div className="text-2xl text-gray-600 font-medium">لكل صفحة PDF</div>
                  <div className="text-lg text-gray-500 mt-2">أقل سعر في السوق</div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="space-y-6">
                    <h4 className="font-bold text-2xl text-gray-900 flex items-center">
                      <CheckCircle className="h-6 w-6 text-emerald-500 ml-3" />
                      ما تحصل عليه
                    </h4>
                    <ul className="space-y-4">
                      <li className="flex items-center text-lg">
                        <CheckCircle className="h-5 w-5 text-emerald-500 ml-3 flex-shrink-0" />
                        تشكيل كامل ودقيق للنص العربي
                      </li>
                      <li className="flex items-center text-lg">
                        <CheckCircle className="h-5 w-5 text-emerald-500 ml-3 flex-shrink-0" />
                        دقة تصل إلى 99.8%
                      </li>
                      <li className="flex items-center text-lg">
                        <CheckCircle className="h-5 w-5 text-emerald-500 ml-3 flex-shrink-0" />
                        تحميل فوري للنتائج
                      </li>
                      <li className="flex items-center text-lg">
                        <CheckCircle className="h-5 w-5 text-emerald-500 ml-3 flex-shrink-0" />
                        دعم جميع أنواع الخطوط
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <h4 className="font-bold text-2xl text-gray-900 flex items-center">
                      <Crown className="h-6 w-6 text-amber-500 ml-3" />
                      مميزات حصرية
                    </h4>
                    <ul className="space-y-4">
                      <li className="flex items-center text-lg">
                        <CheckCircle className="h-5 w-5 text-emerald-500 ml-3 flex-shrink-0" />
                        حفظ تاريخ كامل للمعالجات
                      </li>
                      <li className="flex items-center text-lg">
                        <CheckCircle className="h-5 w-5 text-emerald-500 ml-3 flex-shrink-0" />
                        دعم فني متخصص 24/7
                      </li>
                      <li className="flex items-center text-lg">
                        <CheckCircle className="h-5 w-5 text-emerald-500 ml-3 flex-shrink-0" />
                        ضمان استرداد المال
                      </li>
                      <li className="flex items-center text-lg">
                        <CheckCircle className="h-5 w-5 text-emerald-500 ml-3 flex-shrink-0" />
                        تحديثات مجانية مدى الحياة
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="text-center">
                  <Link href="/register">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-16 py-6 text-xl font-medium shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                    >
                      ابدأ الآن مجاناً
                      <Sparkles className="mr-3 h-6 w-6" />
                    </Button>
                  </Link>
                  <p className="text-gray-500 mt-4 text-lg">5 صفحات مجانية عند التسجيل</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 py-24 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-blue-800 font-medium mb-6">
              <Star className="h-4 w-4 ml-2" />
              آراء عملائنا
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">قصص نجاح ملهمة</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اكتشف كيف غيّرت مشكول حياة آلاف المستخدمين حول العالم العربي
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-amber-50/30 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <CardContent className="p-8">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed font-medium">
                  "مشكول وفر علي أسابيع من العمل! الدقة مذهلة والسرعة لا تصدق. أصبح جزءاً لا يتجزأ من عملي اليومي."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg ml-4">
                    أ
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">أحمد محمد الشريف</div>
                    <div className="text-amber-600 font-medium">كاتب ومحرر صحفي</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-orange-50/30 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <CardContent className="p-8">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed font-medium">
                  "كأستاذة جامعية، أحتاج لدقة عالية في تشكيل النصوص. مشكول يقدم نتائج احترافية تفوق توقعاتي دائماً."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg ml-4">
                    ف
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">د. فاطمة علي حسن</div>
                    <div className="text-rose-600 font-medium">أستاذة الأدب العربي</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-emerald-50/30 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <CardContent className="p-8">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed font-medium">
                  "واجهة سهلة وأنيقة، نتائج مبهرة، وخدمة عملاء متميزة. مشكول هو الحل الأمثل لكل من يعمل بالنصوص
                  العربية."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg ml-4">
                    م
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">محمد حسن العراقي</div>
                    <div className="text-emerald-600 font-medium">مدير تحرير</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 space-x-reverse mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Crown className="h-7 w-7 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent logo-text">
                  مشكول
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
                منصة رائدة في تشكيل النصوص العربية باستخدام أحدث تقنيات الذكاء الاصطناعي، نخدم آلاف المستخدمين حول
                العالم العربي.
              </p>
              <div className="flex space-x-4 space-x-reverse">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <span className="text-white font-bold">ف</span>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-sky-500 rounded-lg flex items-center justify-center hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <span className="text-white font-bold">ت</span>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <span className="text-white font-bold">و</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-6 text-amber-400">خدماتنا</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">تشكيل النصوص</li>
                <li className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">معالجة PDF</li>
                <li className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">التحقق من الدقة</li>
                <li className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">التصحيح الآلي</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-6 text-amber-400">تواصل معنا</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-amber-400 transition-colors duration-300">info@mushkool.com</li>
                <li className="hover:text-amber-400 transition-colors duration-300">+20 123 456 789</li>
                <li className="hover:text-amber-400 transition-colors duration-300">القاهرة، مصر</li>
                <li className="hover:text-amber-400 transition-colors duration-300">مركز المساعدة</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-lg">
              &copy; 2024 مشكول. جميع الحقوق محفوظة. صُنع بـ
              <span className="text-red-400 mx-2">♥</span>
              في العالم العربي
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
