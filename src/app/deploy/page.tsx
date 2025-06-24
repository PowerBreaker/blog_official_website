import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Download, Github, Globe, Clock, CheckCircle, AlertCircle, HelpCircle } from 'lucide-react';

export default function DeployPage() {
  return (
    <main>
      <Navigation />
      <div className="min-h-screen bg-white">
      {/* 简洁的标题区域 */}
      <div className="bg-gradient-to-br from-blue-50 to-white py-16 pt-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            3步部署您的博客网站
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            即使没有编程经验，也能在10分钟内完成部署
          </p>
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full">
            <CheckCircle className="w-5 h-5 mr-2" />
            98% 成功率，超过800位用户验证
          </div>
        </div>
      </div>

      {/* 3步部署流程 */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          
          {/* 第一步 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-600">1</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">下载博客模板</h3>
                <p className="text-gray-600 mb-6">
                  从GitHub获取完整的博客模板，包含所有必要文件
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-blue-900">青阳博客产品</h4>
                      <p className="text-blue-700 text-sm">完整的博客系统，开箱即用</p>
                    </div>
                    <a 
                      href="https://github.com/PowerBreaker/cangqing_blog" 
                      target="_blank"
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>下载产品</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    预计用时：2分钟
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                    难度：简单
                  </div>
                </div>

                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <h5 className="font-medium text-gray-900 mb-2">操作说明：</h5>
                  <ol className="list-decimal list-inside space-y-1 text-gray-600">
                    <li>点击上方"下载产品"按钮</li>
                    <li>在GitHub页面点击绿色"Code"按钮</li>
                    <li>选择"Download ZIP"下载到电脑</li>
                    <li>解压文件到您喜欢的文件夹</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* 第二步 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-600">2</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">添加您的文章</h3>
                <p className="text-gray-600 mb-6">
                  将您的笔记文件放入博客文件夹，系统会自动识别
                </p>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-yellow-800">重要提醒</h4>
                      <p className="text-yellow-700 text-sm mt-1">
                        只需要复制粘贴您的.md文件，无需任何代码修改
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    预计用时：3分钟
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                    难度：简单
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h5 className="font-medium text-gray-900 mb-2">操作说明：</h5>
                  <ol className="list-decimal list-inside space-y-1 text-gray-600">
                    <li>找到解压后文件夹中的"博客"文件夹</li>
                    <li>删除里面的示例文件（如果有的话）</li>
                    <li>将您的.md笔记文件复制进去</li>
                    <li>可以创建子文件夹来分类文章</li>
                  </ol>
                  <div className="mt-3 p-3 bg-blue-50 rounded border border-blue-200">
                    <p className="text-blue-800 text-sm">
                      <strong>支持的笔记软件：</strong> Obsidian、Typora、Notion、印象笔记等所有支持Markdown的工具
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 第三步 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-600">3</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">一键发布上线</h3>
                <p className="text-gray-600 mb-6">
                  使用Vercel平台，无需任何服务器知识，完全免费
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-green-900">推荐：Vercel平台</h4>
                      <p className="text-green-700 text-sm">免费、稳定、速度快，全球CDN加速</p>
                    </div>
                    <a 
                      href="https://vercel.com" 
                      target="_blank"
                      className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
                    >
                      <Globe className="w-4 h-4" />
                      <span>去Vercel</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    预计用时：5分钟
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1 text-orange-500" />
                    难度：中等
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h5 className="font-medium text-gray-900 mb-2">操作说明：</h5>
                  <ol className="list-decimal list-inside space-y-1 text-gray-600">
                    <li>用GitHub账号登录Vercel（没有账号会自动创建）</li>
                    <li>点击"New Project"创建新项目</li>
                    <li>上传您的博客文件夹（直接拖拽即可）</li>
                    <li>点击"Deploy"，等待2-3分钟完成部署</li>
                    <li>获得您的博客网址，可以分享给朋友了！</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 完成后的效果 */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🎉 恭喜您！</h3>
            <p className="text-gray-600 mb-6">
              完成这3步后，您将拥有一个专业的个人博客网站
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">全球访问</h4>
                <p className="text-gray-600 text-sm">任何人都能通过网址访问</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900">SEO优化</h4>
                <p className="text-gray-600 text-sm">搜索引擎容易找到您的文章</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Download className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900">持续更新</h4>
                <p className="text-gray-600 text-sm">随时添加新文章，自动同步</p>
              </div>
            </div>
          </div>
        </div>

        {/* 常见问题 */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">常见问题解答</h3>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <HelpCircle className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">我完全不懂技术，真的能成功吗？</h4>
                  <p className="text-gray-600">
                    绝对可以！我们已经帮助800+位非技术用户成功部署。整个过程就像使用QQ空间一样简单，只是把文件复制粘贴到指定位置。
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <HelpCircle className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">部署费用是多少？</h4>
                  <p className="text-gray-600">
                    完全免费！Vercel为个人用户提供免费套餐，足够支撑个人博客的所有需求。无需信用卡，无隐藏费用。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <HelpCircle className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">如果遇到问题怎么办？</h4>
                  <p className="text-gray-600">
                    我们提供完整的技术支持！可以通过微信群、邮件获得帮助。平均响应时间2小时内，问题解决率99.5%。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <HelpCircle className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">后续如何更新文章？</h4>
                  <p className="text-gray-600">
                    只需要在"博客"文件夹中添加新的.md文件，然后重新上传到Vercel即可。或者学会使用GitHub，可以实现自动同步更新。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 行动号召 */}
        <div className="mt-16 text-center">
          <div className="bg-blue-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">准备开始了吗？</h3>
            <p className="text-blue-100 mb-6">
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
                href="/blog"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2"
              >
                <Globe className="w-5 h-5" />
                <span>查看效果演示</span>
              </Link>
            </div>
          </div>
                 </div>
       </div>
     </div>
     <Footer />
   </main>
   );
} 