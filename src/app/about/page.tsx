import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { 
  Heart, 
  Users, 
  Target, 
  Mail,
  Github,
  MessageCircle,
  CheckCircle,
  Clock
} from 'lucide-react'

export default function About() {
  const timeline = [
    {
      year: "2024年1月",
      title: "项目诞生",
      description: "看到写作者们被技术门槛困扰，决定创建一个零门槛的博客解决方案"
    },
    {
      year: "2024年2月",
      title: "核心功能完成",
      description: "完成笔记软件对接、一键部署等核心功能，开始内测"
    },
    {
      year: "2024年3月",
      title: "用户突破1000+",
      description: "越来越多的写作者加入，社区活跃度持续提升"
    },
    {
      year: "现在",
      title: "持续优化",
      description: "基于用户反馈不断改进，让每个人都能拥有专业博客"
    }
  ]

  const values = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "用户至上",
      description: "一切功能设计都以用户体验为中心，让技术服务于创作"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "简单高效",
      description: "追求极简的操作流程，用最少的步骤实现最大的价值"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "开放共享",
      description: "完全开源免费，知识和技术应该被广泛共享"
    }
  ]

  const team = [
    {
      name: "青阳团队",
      role: "产品研发",
      description: "专注于为写作者提供最佳的技术解决方案"
    },
    {
      name: "社区贡献者",
      role: "功能优化",
      description: "来自全球的开发者和用户，共同完善产品"
    }
  ]

  const stats = [
    { number: "1000+", label: "活跃用户" },
    { number: "15+", label: "支持的笔记软件" },
    { number: "99.9%", label: "服务可用性" },
    { number: "24/7", label: "技术支持" }
  ]

  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            关于我们
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            为写作者而生，让每个人都能拥有专业的博客网站
          </p>
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            <CheckCircle className="w-4 h-4 mr-2" />
            服务1000+写作者的技术团队
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">我们的使命</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              消除技术壁垒，让每一位写作者都能轻松拥有专业的博客网站。
              我们相信，好的内容不应该被技术门槛所阻挡，
              知识的价值应该通过更好的展示方式得到体现。
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">核心价值观</h2>
            <p className="text-gray-600">指导我们产品设计和服务的基本原则</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">发展历程</h2>
            <p className="text-gray-600">从想法到现实，我们一直在为写作者服务</p>
          </div>
          
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">团队介绍</h2>
            <p className="text-gray-600">热爱技术、专注产品的团队</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">产品故事</h2>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                青阳博客的诞生源于一个简单的观察：许多优秀的写作者拥有丰富的知识和深刻的见解，
                但却被技术门槛阻挡在博客世界之外。他们的笔记软件里积累了大量优质内容，
                却无法轻松地分享给更多人。
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                我们相信，技术应该服务于创作，而不是成为创作的障碍。
                因此，我们开发了青阳博客——一个真正为写作者设计的博客解决方案。
                它不需要您学习复杂的技术，不需要您改变现有的写作习惯，
                只需要简单的几步操作，就能将您的知识以最优雅的方式呈现给世界。
              </p>
              <p className="text-gray-700 leading-relaxed">
                今天，已有1000+写作者选择了青阳博客，他们中有自由撰稿人、教育工作者、
                产品经理、学生等各行各业的知识工作者。每当看到用户成功搭建了属于自己的博客，
                分享知识、连接读者时，我们都深感这项工作的意义。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">联系我们</h2>
            <p className="text-gray-600">随时欢迎您的反馈和建议</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mx-auto mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">邮件联系</h3>
              <p className="text-gray-600 text-sm mb-2">技术支持和合作咨询</p>
              <a href="mailto:contact@qingyang.blog" className="text-blue-600 hover:text-blue-700">
                contact@qingyang.blog
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mx-auto mb-4">
                <Github className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">开源社区</h3>
              <p className="text-gray-600 text-sm mb-2">参与开发和问题反馈</p>
              <a href="https://github.com/qingyangblogs" target="_blank" className="text-blue-600 hover:text-blue-700">
                GitHub
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mx-auto mb-4">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">用户社区</h3>
              <p className="text-gray-600 text-sm mb-2">加入用户交流群</p>
              <span className="text-blue-600">微信群二维码</span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">获取最新动态</h2>
          <p className="text-blue-100 mb-8 text-lg">
            订阅我们的邮件列表，第一时间了解新功能和优化
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="输入您的邮箱"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              订阅更新
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 