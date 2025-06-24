import Link from 'next/link'
import { Github, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">青之鹰博客</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              专为写作者设计的博客平台，无缝对接笔记软件，让创作更纯粹、分享更简单。
            </p>
            <div className="flex items-center text-gray-400">
              <span>用</span>
              <Heart className="w-4 h-4 mx-1 text-red-500" />
              <span>为写作者而建</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-gray-400 hover:text-white transition-colors">
                  功能特性
                </Link>
              </li>
              <li>
                <Link href="/deploy" className="text-gray-400 hover:text-white transition-colors">
                  部署指南
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  关于我们
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">联系我们</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com" 
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </li>
              <li>
                <span className="text-gray-400">技术支持: support@qingyang.blog</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 青之鹰博客. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  )
} 