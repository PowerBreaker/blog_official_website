import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { 
  BookOpen, 
  Clock, 
  Search,
  Tag,
  TrendingUp,
  Eye,
  ArrowRight,
  ExternalLink,
  CheckCircle,
  Users
} from 'lucide-react'

export default function Blog() {
  const featuredPosts = [
    {
      title: "Obsidian到博客：我的知识管理革命",
      excerpt: "从零散的笔记到系统化的知识库，分享我如何用青阳博客改变了知识管理方式。",
      category: "工具使用",
      readTime: "5分钟",
      views: "1.2k",
      date: "2024-03-15"
    },
    {
      title: "写作者的数字化转型指南",
      excerpt: "如何在数字时代建立个人品牌，让您的文字触达更多读者，创造更大价值。",
      category: "写作技巧",
      readTime: "8分钟",
      views: "2.1k",
      date: "2024-03-12"
    },
    {
      title: "从笔记软件到个人网站的完美迁移",
      excerpt: "详细记录了我从Notion迁移到青阳博客的全过程，包括遇到的问题和解决方案。",
      category: "经验分享",
      readTime: "6分钟",
      views: "1.8k",
      date: "2024-03-10"
    }
  ]

  const categories = [
    { name: "工具使用", count: 15, color: "bg-blue-100 text-blue-800" },
    { name: "写作技巧", count: 12, color: "bg-green-100 text-green-800" },
    { name: "经验分享", count: 18, color: "bg-purple-100 text-purple-800" },
    { name: "生活方式", count: 9, color: "bg-orange-100 text-orange-800" }
  ]

  const blogFeatures = [
    {
      title: "全文搜索",
      description: "强大的搜索功能，快速找到您需要的内容"
    },
    {
      title: "标签分类",
      description: "智能标签系统，内容分类一目了然"
    },
    {
      title: "响应式设计",
      description: "完美适配所有设备，随时随地阅读"
    },
    {
      title: "SEO优化",
      description: "搜索引擎友好，提升内容曝光度"
    }
  ]

  const stats = [
    { number: "54", label: "总文章数" },
    { number: "12", label: "分类数量" },
    { number: "95%", label: "用户满意度" },
    { number: "3秒", label: "平均加载时间" }
  ]

  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            示例博客
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            体验真实的博客效果，感受专业的内容展示
          </p>
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            <TrendingUp className="w-4 h-4 mr-2" />
            95%的用户能在3秒内找到想要的内容
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Featured Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">精选文章</h2>
            <p className="text-gray-600">看看真实的博客文章效果</p>
          </div>
          
          <div className="space-y-8">
            {featuredPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {post.views}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                    阅读全文
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">文章分类</h2>
            <p className="text-gray-600">内容分类清晰，便于查找</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Tag className="w-5 h-5 text-gray-400" />
                  <span className="font-medium text-gray-900">{category.name}</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${category.color}`}>
                  {category.count} 篇
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Features */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">博客功能特性</h2>
            <p className="text-gray-600">专业博客的所有功能，一应俱全</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {blogFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Experience */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">导航体验</h2>
            <p className="text-gray-600">直观的文件树导航，快速定位内容</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">文件树结构</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-700">
                    <span className="mr-2">📁</span> 工具使用
                  </div>
                  <div className="flex items-center text-gray-600 ml-4">
                    <span className="mr-2">📄</span> Obsidian使用技巧
                  </div>
                  <div className="flex items-center text-gray-600 ml-4">
                    <span className="mr-2">📄</span> Notion进阶指南
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="mr-2">📁</span> 写作技巧
                  </div>
                  <div className="flex items-center text-gray-600 ml-4">
                    <span className="mr-2">📄</span> 高效写作方法
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">用户体验数据</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">平均查找时间</span>
                    <span className="font-semibold text-green-600">&lt; 10秒</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">导航满意度</span>
                    <span className="font-semibold text-green-600">95%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">移动端适配</span>
                    <span className="font-semibold text-green-600">完美</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">创建您自己的博客</h2>
          <p className="text-blue-100 mb-8 text-lg">
            体验过效果，现在开始创建您的专业博客吧
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/deploy"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <BookOpen className="w-5 h-5" />
              <span>开始创建</span>
            </Link>
            <a 
              href="https://qingyang-blog-demo.vercel.app" 
              target="_blank"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2"
            >
              <ExternalLink className="w-5 h-5" />
              <span>访问完整示例</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 