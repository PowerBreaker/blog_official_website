import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { 
  FileText, 
  Zap, 
  Smartphone, 
  Globe,
  Search,
  Shield,
  CheckCircle,
  Users,
  Clock,
  Heart,
  ArrowRight,
  Download,
  Github
} from 'lucide-react'
import Link from 'next/link'

export default function Features() {
  const coreFeatures = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "无缝笔记对接",
      description: "支持Obsidian、Typora、Notion等15+主流笔记软件，保持原有写作习惯，零学习成本"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "一键部署",
      description: "3步完成部署，平均5分钟拥有专业博客，无需编程知识，自动化部署流程"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "全球访问",
      description: "CDN加速，99.9%可用性保证，全球高速访问，SSL安全证书，自动备份"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "响应式设计",
      description: "完美适配手机、平板、电脑所有设备，移动端优化，触摸友好，快速加载"
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "智能搜索",
      description: "全文搜索，标签分类，内容推荐，即时搜索结果，智能内容推荐，相关文章联想"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "安全可靠",
      description: "GitHub存储，Vercel托管，数据永不丢失，版本控制，自动备份，安全可靠"
    }
  ]

  const comparison = {
    features: [
      "部署难度",
      "技术门槛", 
      "服务器费用",
      "维护成本",
      "加载速度",
      "SEO友好",
      "移动适配",
      "安全性"
    ],
    qingyang: [
      "极简单 (5分钟)",
      "零要求",
      "完全免费",
      "零维护",
      "极快",
      "完美",
      "原生支持",
      "GitHub级别"
    ],
    wordpress: [
      "复杂",
      "需要技术基础",
      "需要付费主机",
      "需要定期更新",
      "较慢",
      "需要优化",
      "需要插件",
      "需要维护"
    ],
    traditional: [
      "很复杂",
      "需要编程",
      "服务器费用高",
      "技术维护",
      "取决于服务器",
      "需要手动优化",
      "需要开发",
      "自己负责"
    ]
  }

  const benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "节省时间",
      description: "从几周的开发时间缩短到5分钟",
      value: "节省 99% 时间"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "专注创作",
      description: "告别技术烦恼，专心写作分享",
      value: "提升创作效率"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "扩大影响",
      description: "优质博客提升个人品牌影响力",
      value: "增强个人影响力"
    }
  ]

  const targetUsers = [
    {
      title: "写作爱好者",
      description: "有丰富的笔记内容，希望分享给更多人，但缺乏技术背景"
    },
    {
      title: "自媒体创作者",
      description: "需要专业的内容展示平台，提升个人品牌形象"
    },
    {
      title: "知识工作者",
      description: "积累了大量专业知识，希望建立个人影响力"
    },
    {
      title: "学生群体",
      description: "学习笔记丰富，希望与同学分享，建立学习社区"
    }
  ]

  const testimonials = [
    {
      name: "张老师",
      role: "教育工作者",
      content: "终于可以把我的教学笔记分享给学生了，网站专业又美观，学生们都很喜欢。",
      rating: 5
    },
    {
      name: "李同学",
      role: "研究生",
      content: "学术笔记终于有了专业的展示平台，同领域的研究者都能看到我的思考。",
      rating: 5
    },
    {
      name: "王女士",
      role: "自由撰稿人",
      content: "从Notion到博客只用了10分钟，现在我的文章有了更好的展示效果。",
      rating: 5
    }
  ]

  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            功能特性
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            专业、简单、可靠的博客解决方案，为写作者量身定制
          </p>
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            <CheckCircle className="w-4 h-4 mr-2" />
            已有1000+用户验证的强大功能
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">六大核心功能</h2>
            <p className="text-gray-600">简单易用，功能强大，满足所有博客需求</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">与其他方案对比</h2>
            <p className="text-gray-600">看看我们的优势有多明显</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">功能对比</th>
                    <th className="px-6 py-4 text-center font-semibold text-blue-600">青阳博客</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-600">WordPress</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-600">传统开发</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.features.map((feature, index) => (
                    <tr key={index} className="border-t border-gray-200">
                      <td className="px-6 py-4 font-medium text-gray-900">{feature}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-green-600 font-medium">{comparison.qingyang[index]}</span>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">{comparison.wordpress[index]}</td>
                      <td className="px-6 py-4 text-center text-gray-600">{comparison.traditional[index]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">您能获得什么价值？</h2>
            <p className="text-gray-600">不仅仅是技术工具，更是创作助手</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-3">{benefit.description}</p>
                <div className="text-blue-600 font-semibold">{benefit.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">适合哪些用户？</h2>
            <p className="text-gray-600">专门为这些群体设计</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {targetUsers.map((user, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{user.title}</h3>
                <p className="text-gray-600">{user.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">用户真实评价</h2>
            <p className="text-gray-600">看看其他用户的使用体验</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
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
          <h2 className="text-3xl font-bold mb-4">立即体验强大功能</h2>
          <p className="text-blue-100 mb-8 text-lg">
            所有功能完全免费，无隐藏费用
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/qingyangblogs/qingyang-blog" 
              target="_blank"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>下载模板</span>
            </a>
            <Link 
              href="/deploy"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2"
            >
              <ArrowRight className="w-5 h-5" />
              <span>开始部署</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 