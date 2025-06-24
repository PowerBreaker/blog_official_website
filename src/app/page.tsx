import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { 
  ArrowRight, 
  CheckCircle, 
  BookOpen, 
  Edit3, 
  Zap, 
  Users,
  FileText,
  Globe,
  Heart,
  Download,
  Github,
  ExternalLink,
  Clock,
  Star,
  TrendingUp,
  Shield
} from 'lucide-react'

export default function Home() {
  const painPoints = [
    {
      problem: "技术门槛太高？",
      solution: "零代码操作，只需会用记事本",
      icon: "😰→😊"
    },
    {
      problem: "部署太复杂？",
      solution: "3步完成，比发朋友圈还简单",
      icon: "🤯→🎉"
    },
    {
      problem: "笔记无法分享？",
      solution: "一键转换，让知识产生价值",
      icon: "📝→🌐"
    }
  ]

  const features = [
    {
      icon: <Edit3 className="h-6 w-6" />,
      title: '无缝笔记对接',
      description: '支持Obsidian、Typora、Notion等15+主流笔记软件，保持原有写作习惯'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: '一键部署',
      description: '3步完成部署，平均5分钟拥有专业博客，无需编程知识'
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: '全球访问',
      description: 'CDN加速，99.9%可用性保证，SSL安全证书，自动备份'
    }
  ]

  const actionCards = [
    {
      title: '下载模板',
      description: '获取完整博客源码，包含所有功能',
      icon: <Github className="h-6 w-6" />,
      href: 'https://github.com/qingyangblogs/qingyang-blog',
      buttonText: '免费下载',
      external: true
    },
    {
      title: '部署指南',
      description: '跟随详细教程，快速部署您的博客',
      icon: <Zap className="h-6 w-6" />,
      href: '/deploy',
      buttonText: '开始部署',
      external: false
    },
    {
      title: '示例博客',
      description: '查看真实博客效果和功能展示',
      icon: <BookOpen className="h-6 w-6" />,
      href: '/blog',
      buttonText: '查看示例',
      external: false
    }
  ]

  const stats = [
    { number: '1000+', label: '活跃用户' },
    { number: '15+', label: '支持工具' },
    { number: '99.9%', label: '正常运行' },
    { number: '5分钟', label: '平均部署' }
  ]

  const testimonials = [
    {
      name: '小雨',
      role: '自由写作者',
      content: '太惊喜了！我的Obsidian笔记瞬间变成了专业博客，朋友们都以为我请了开发团队。',
      rating: 5
    },
    {
      name: '李明',
      role: '产品经理',
      content: '作为非技术人员，我终于能拥有自己的博客了。界面精美，功能完善，强烈推荐！',
      rating: 5
    },
    {
      name: '张萌',
      role: '学习博主',
      content: '从Typora到博客，只用了10分钟。现在我的学习笔记能帮助更多人了，很有成就感！',
      rating: 5
    }
  ]

  const noteApps = [
    { name: 'Obsidian', emoji: '🔗', users: '100万+用户' },
    { name: 'Typora', emoji: '📝', users: '500万+用户' },
    { name: 'Notion', emoji: '📋', users: '2000万+用户' },
    { name: 'Logseq', emoji: '🧠', users: '50万+用户' }
  ]

  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            已有1000+写作者选择我们
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">10分钟</span>把笔记变成
            <br />专业博客网站
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            无需学编程，无需改变习惯。继续用您喜爱的笔记软件写作，
            我们帮您一键生成专业级博客网站
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/deploy"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center text-lg font-semibold"
            >
              立即开始（完全免费）
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/blog"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center text-lg font-semibold"
            >
              查看效果演示
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              无需编程知识
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              支持所有笔记软件
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              10分钟完成部署
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              永久免费使用
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">为什么选择青阳博客？</h2>
            <p className="text-gray-600">专业、简单、可靠的博客解决方案</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Cards Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">开始您的博客之旅</h2>
            <p className="text-gray-600">三个简单选择，开启专业博客体验</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {actionCards.map((card, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mx-auto mb-4">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 mb-6">{card.description}</p>
                <Link
                  href={card.href}
                  {...(card.external ? { target: "_blank" } : {})}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  {card.buttonText}
                  {card.external ? <ExternalLink className="w-4 h-4 ml-2" /> : <ArrowRight className="w-4 h-4 ml-2" />}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">用户真实反馈</h2>
            <p className="text-gray-600">看看其他用户怎么说</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">准备开始了吗？</h2>
          <p className="text-blue-100 mb-8 text-lg">
            10分钟后，您就能拥有属于自己的专业博客网站
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/qingyangblogs/qingyang-blog" 
              target="_blank"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <Github className="w-5 h-5" />
              <span>立即下载模板</span>
            </a>
            <Link 
              href="/deploy"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2"
            >
              <Zap className="w-5 h-5" />
              <span>查看部署教程</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 