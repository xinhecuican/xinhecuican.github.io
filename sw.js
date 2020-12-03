/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","a036850af596e83740025afb9d62a628"],["/archives/2019/index.html","73544352d1589f0dc3a2fdd9a3b92f50"],["/archives/2020/01/index.html","22d211c1939718a1b4a0359247c32480"],["/archives/2020/01/page/2/index.html","3bf01a83bb3c7cc96cb68a2cb97384fd"],["/archives/2020/01/page/3/index.html","707d2c42271895d50a756285f2009a5a"],["/archives/2020/01/page/4/index.html","4d3ef3842e150e1151c07888fdf31279"],["/archives/2020/01/page/5/index.html","dd6d37894747739836be77a1203f1217"],["/archives/2020/01/page/6/index.html","ab637b8744314769d60ad50e17f557e4"],["/archives/2020/02/index.html","78a5671149077cc6a778c33a03cfca69"],["/archives/2020/02/page/2/index.html","700e7a0a5eea6c5b6cf90f2efe25be76"],["/archives/2020/02/page/3/index.html","78957bfbae76d658e0bfabab9bbae686"],["/archives/2020/03/index.html","5e395b8416c04f0685ad5f966676857c"],["/archives/2020/03/page/2/index.html","855f82a5cb63d0cbad3f03b7ab72714a"],["/archives/2020/04/index.html","0d8053db976646848abd92496140416a"],["/archives/2020/04/page/2/index.html","964563632194902a0e186b9cb61fbf24"],["/archives/2020/05/index.html","392eee17df5fb25bbf7acfc5c5a9b3a8"],["/archives/2020/05/page/2/index.html","8fa45a43ca63f8e5ba90ad8a7ea10bc9"],["/archives/2020/06/index.html","ed2b653fc831720a166e0a1379d53cdd"],["/archives/2020/07/index.html","b78c8288ac67fe61425aaae2dbe4c74f"],["/archives/2020/07/page/2/index.html","289d4efa444c8f99ab1375a6d47e9c34"],["/archives/2020/08/index.html","e6a76be1f304e7f652a6ad76690d7df5"],["/archives/2020/10/index.html","29f8bec9c3a7d4f3c8bdc82486970fc3"],["/archives/2020/11/index.html","bedf37b8129eefaa67c3774dc1128e7a"],["/archives/2020/index.html","4c062ccf88183e3c1e2dd07664c78c82"],["/archives/2020/page/10/index.html","8d947ab41ab8947f8de489b9ea085fce"],["/archives/2020/page/11/index.html","ab37ae32ad6d5bf62f43da9f89e74d6d"],["/archives/2020/page/12/index.html","62f56cc22be7bca2de9bcd41caea9b74"],["/archives/2020/page/13/index.html","2bf9651f2a8a304ce2fe30f4d4af9aef"],["/archives/2020/page/14/index.html","a4919aa9ec9605ac5630dac3bd1c48dd"],["/archives/2020/page/15/index.html","364a677de1d14478d31862f74d52e17d"],["/archives/2020/page/16/index.html","6aa3f9cf6d548c2b5c7ea5689c7c845e"],["/archives/2020/page/2/index.html","84035c8eecc8fe20426ed9bd04c1147c"],["/archives/2020/page/3/index.html","2b1a8d8a67891f5993e993e6716643a2"],["/archives/2020/page/4/index.html","fb2309abd6fe9b5678014efb9dafb7c2"],["/archives/2020/page/5/index.html","fa8f077892a05a93cec16bfd75713dea"],["/archives/2020/page/6/index.html","f18fe906df2489b93a3d1f3e5a00d894"],["/archives/2020/page/7/index.html","35a739d42c05c83a54ca451ccb211ba8"],["/archives/2020/page/8/index.html","bdb5a08eadb23066440376b98efff064"],["/archives/2020/page/9/index.html","ba492bf2f0eea8136bb88f2fc10ddbd2"],["/archives/index.html","929ef0baebbcb123d39e54a518ab57ff"],["/archives/page/10/index.html","2adbd729fee3d42f667aac1156130c2c"],["/archives/page/11/index.html","7299e974443c3cbd85aa4d746decb00d"],["/archives/page/12/index.html","ed9dc1da7a8d17621b00f0db2bad00bd"],["/archives/page/13/index.html","cffa5017448803a820095b73626bf0a6"],["/archives/page/14/index.html","4e8efa92d416ac9b7d9f1d8cebe3626e"],["/archives/page/15/index.html","30763643bb24f0a37b2c392bf3d3be42"],["/archives/page/16/index.html","35b0a5a91d7846f5d8ef0ce590dbbc24"],["/archives/page/2/index.html","781eb502914a38b1e2bd4dc33cc8a3fb"],["/archives/page/3/index.html","b757d54ac150b3561951b496289d4443"],["/archives/page/4/index.html","4f39bc97e7d180f7615eafc03e03f8a6"],["/archives/page/5/index.html","f73145049406765798eb5189cd8a608a"],["/archives/page/6/index.html","6846092e9eb5c708046ed380c5fad482"],["/archives/page/7/index.html","eed2fa5078a96b25d6746f9aae353417"],["/archives/page/8/index.html","28c45cb55a5d23f78b16560537d1abd2"],["/archives/page/9/index.html","13da5d90f4173d4364b6c0153e352cdd"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","55ae62fc988b74f8b22177988a3f1f31"],["/categories/Linux/page/2/index.html","bf50c4e74f8aab59e4db115044c035f5"],["/categories/Python/index.html","f0248b83a9a03f9cc70cf0875838f283"],["/categories/c/index.html","ce2e50dc9b29750ac3a4cba13831398a"],["/categories/index.html","e28194f1dfdb24aeb097d8d5443a3b2e"],["/categories/java/index.html","f739301e8e8833a320caacf7d1b99ae0"],["/categories/java/page/2/index.html","30aaa637c26b93f774e02fe9caba2a9e"],["/categories/java/page/3/index.html","051473475b435b89b539761276f6c27a"],["/categories/next/index.html","f77be4399c7ed1cdf496b0e3caa23431"],["/categories/stl/index.html","ca13e1ec3579cbb4da496988fa21d5a8"],["/categories/windows/index.html","2af8814866cf964f5781733bed3c2e36"],["/categories/基础/c/index.html","8ab79c36c4c4d82f67dc90e4a384a0b0"],["/categories/基础/index.html","dcccaf9579f96eb66af7ca8415b9adff"],["/categories/基础/page/2/index.html","4df1f305d029e4b6b763ab8f57891bb4"],["/categories/数学/index.html","c8f9124eec26b1195bb6e78bf25f9152"],["/categories/数学/概率论/index.html","15af2e991713aa7878854955b6b8afd1"],["/categories/数据结构/index.html","01cc44f857662869d0be32e2c0ce5444"],["/categories/数据结构/算法/index.html","32fb640c2e19fe8349c10fdacc8e8543"],["/categories/机器学习/index.html","1f155f4ef1cb86e8bf80ab9b46315b89"],["/categories/汇编/AT-T/index.html","9a5e9ae16324c6256179c82ecc46c4d2"],["/categories/汇编/index.html","7064ffd7d083e8261339bfabc5d217ed"],["/categories/汇编/page/2/index.html","76d35c4e1798b935adaf3949e85ea8ec"],["/categories/汇编/page/3/index.html","6d09dd46ce2b6c06c386fccbf6617769"],["/categories/算法/index.html","f31f6eea199c78530c773e420c70337e"],["/categories/算法/page/2/index.html","674b323bcb0bca1754502d099adf2c55"],["/categories/计算机系统基础/index.html","8c71e976bdba41ee0cd5cee4696c7413"],["/css/background.css","39b1b22e2903e556913dc52516e1e7de"],["/css/index.css","ae66f464ddf98fbdd1920fb525722a20"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","25f51451e5fd1946f9581decf3446432"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","b991ff70468ec4c57bd33aca6cf518ac"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","1067ad786ce8792722653f678f8c1819"],["/page/11/index.html","fd969b2745c92e083e07f216e4972736"],["/page/12/index.html","345ff27dbd5a683f9c5d35169fef9d05"],["/page/13/index.html","bbe3ea84bf41c58a7d0e744696e52c39"],["/page/14/index.html","b8b12ec565514722fe59d86e8eaa3ef5"],["/page/15/index.html","6d3bd6707055ab571b2676d7712b6dfc"],["/page/16/index.html","660e1222f022ca27b05c57ebbce0a8a7"],["/page/2/index.html","6732dc6e4796962db6a41c0885e7d0ca"],["/page/3/index.html","feeac0f719585f45a76eb8eedc4a198f"],["/page/4/index.html","92b550a202adcfb5783e23b7ee7151bf"],["/page/5/index.html","718fca737a770d8e627bf873d47ea050"],["/page/6/index.html","5ef6090bb73da116e509361583be0c88"],["/page/7/index.html","b7f32285449e58a648e7fca8ed553c67"],["/page/8/index.html","4b8d9ed4d5dec01bb4b9d2a6f22e7951"],["/page/9/index.html","19c8a430fc4b86c8ec5e264ae85710af"],["/post/10919.html","48ad8557c20f7c4da1ae8cd3a03275a4"],["/post/11051.html","4aedae7cbae2fd496edd31bf96cc936e"],["/post/11306.html","d67f01d81d4f8e00f2a2be26a90553a9"],["/post/11491.html","926699b8fdedd8ffd84180051e222373"],["/post/11799.html","53560d223ad193d88417578b58516744"],["/post/12334.html","daf327fabb9aafc7ae87682b62e53384"],["/post/1326.html","aa5740e770ecb7d473418ade2ed8e72e"],["/post/14379.html","81a7c15c703f4386a6dfaaead7dec290"],["/post/14511.html","1b0bda2eee8fcd9001a5a5c0d27f7407"],["/post/15201.html","e0a3bf18d228a604d53e1ab0947e265d"],["/post/15425.html","9eb729cdc05a61e7be3f7129dcf76fb0"],["/post/16107.html","4ebe69a408416fefd12ea484f7392498"],["/post/17862176.html","bd6a006febc36fe54c3b5b9e20d76f6d"],["/post/18431.html","5cc253dfd2ff5ae0e8d837ea31311882"],["/post/18912.html","921df3ff4e3137cd18a4f689d94ace08"],["/post/1b9c8662.html","f3d675a7ca8c54505e8207d75df1f9de"],["/post/20198.html","039db2ec73324a3ef03543690793bea1"],["/post/20ff5ccb.html","44fef05a840d04e7c67b9a2502d0eaab"],["/post/21624.html","338a8bf1ff7b27135c9b37cd69f4b412"],["/post/2170659a.html","684fb048cc8a5832017532beb4ff1101"],["/post/22102.html","d0a6ff64ee7d10ea7c19791d0ae9b0cf"],["/post/22493.html","9aea9fc6849afef75d9962f87d736878"],["/post/235252ea.html","4ee4ed80d9acff391eb65d3e47695202"],["/post/25699.html","991098e4c90ffda685d1a6df44139399"],["/post/2647.html","dae4a720de769542975a3f60eb5db8e5"],["/post/26477.html","e32ce41b3dee85db1dc5df788f3931c4"],["/post/26671.html","39fc33624d23ddd2fdabf45fa63ea876"],["/post/26737.html","68165da5ad54ef9110dcc3c8891f28a8"],["/post/27045.html","d9454b8e7d885fce04406d72aa900530"],["/post/27621.html","e23c30701b0cac5dee97b6f2a402a714"],["/post/27890.html","ed332df76f08f6ec690ebd25cabe0b0e"],["/post/27980.html","d0db416f8cae9f1903e3173939653582"],["/post/280b588e.html","3cc8b2ad548eb736f2ef8c319e30a7a5"],["/post/28579.html","ad16e22e885315d540e677b9c6a3ffb3"],["/post/28877bf.html","d4414c576ffaa953cea8a09860bded6a"],["/post/28954.html","f7bb30aa7d350072c0a84f76a38162a4"],["/post/29378.html","847247356d932274c37930b297ef79b1"],["/post/29949.html","553e03eecc041145fad1a14d821515f9"],["/post/2ae43b86.html","857bed96560fb316ba26174bc47eb11c"],["/post/2ba82a45.html","a0875ce690137c643ec2340aa01cdfe3"],["/post/30072.html","e737ddb1e8cced9d3baba082366e1a6e"],["/post/30479.html","988a42c3885d99c7e9ed7fc77a9ba9c1"],["/post/31a6b40.html","e1d92cc84b95de389667ea64b7b3f091"],["/post/325cdbf2.html","9e5f543fbf3b4f881710e6681f8d7926"],["/post/3319ed9a.html","17810c7a79c7dde670f2dd17204a6044"],["/post/3320.html","ed8b29ea7cb0cd2b5926ff9cf000e8c3"],["/post/33cb1151.html","643137d2e22dc5316a57114225ab31e0"],["/post/348d4e04.html","e5b6e36153fe6866892301145d4befd1"],["/post/3526.html","89eff9ae512ec2696d895bdd0b04e0dd"],["/post/35532.html","523be400c3d687da9091b4e125b42a44"],["/post/35848.html","ae86d2850aee16d572cdcadd60a43204"],["/post/37318.html","4f1982733f2502a2f50f65e6b49ce3fe"],["/post/37663.html","8ab6c80ca97cab5173f3087b845fb13d"],["/post/38035.html","f8239e08c156218c9ebc405223a0e697"],["/post/38072.html","b955c23665f5364bfc033459006c837e"],["/post/38145.html","31b72ae0fa53812593c97d6b6424a701"],["/post/39968.html","1cd3ee6ee40bdb4f6ac72969807e9da8"],["/post/3de4bc69.html","49e91585e5165f36c66cdfa9bfc2c45f"],["/post/40583.html","3353081df43c310e5a1581bbd3a3c4c3"],["/post/40997091.html","fbf92e61f0ef9eca9e52be67d0196c11"],["/post/41129.html","4b790a212e78f51afe82e2a5d820d1e0"],["/post/41763.html","beeb57904e994559d90a6cf9fc5c74dd"],["/post/41829.html","64e16a5b37d09186e583452dfa4c46af"],["/post/41840.html","92e42b9ab2714e783e156f9f056d7d43"],["/post/43817.html","208bb9f5de90670cbcbfc3b8193c8f17"],["/post/43878.html","c76f465940459f3ed293a3ce10a71bda"],["/post/44250.html","41c695ceabcbaaaf3dfb887d87cf9d39"],["/post/44336.html","125d12117b5e6647847eb36b335243bd"],["/post/44454.html","8223df131bdae62c560703b7f17442fa"],["/post/44487.html","59d5cbb767267b90ede2e297b033e107"],["/post/44914.html","ffa0ff8fd546cb2839ca2c2d87aa67cf"],["/post/4551c130.html","8686535d6e5efb79b00a3f74621cd82b"],["/post/455a4c92.html","a1b81b5d87b52b2b49e669176173a0c2"],["/post/46466.html","3a33d278f575b2ceae498a86e1cf3507"],["/post/46925.html","e3d3a52cb38ed96f4db24f5fc3183ec5"],["/post/47075.html","dc7531c5276a79d2693fd282dd999b8a"],["/post/48220.html","e54e10cce07402db88038a6236e71c82"],["/post/4b1879e3.html","c1cebf621ff4824128c9524639195490"],["/post/4c720881.html","78c5439db4d6ad88f5ca198def973c4e"],["/post/50daec4.html","a0c815870b4d900624886c6ef3ac5f47"],["/post/51491.html","5298e3a8ed59944797ce3591b88f98c8"],["/post/52078.html","9b2ba1ecbc8a7cbce4ad5d58ba0aa565"],["/post/53677394.html","a5b4d96c4875c94e2c9637e107c5578c"],["/post/54300.html","eae4fd57f1a3ace516d6af99b3f302cf"],["/post/54612.html","8853cf8011aa584e064d3e8194212b48"],["/post/54613.html","3608eafabbae92feade1f68f89a4a10e"],["/post/54708.html","398f2c5e6f793e929075d9e23e2beb4a"],["/post/54778.html","43694af9d67ee60fd4a19a1005cfbbc0"],["/post/5490.html","7d666f7c5fad9d75df784b63b42cfd27"],["/post/55046.html","43d9f751f50efbfd790882856f20e969"],["/post/56929.html","3ce5a88905d7d79ab543b3fb9cc0fb61"],["/post/57339.html","6b7cdc6bd765ed42c47ae9ba81f019c1"],["/post/57449.html","00b76d29ce195b8fbf753e6901b65c2d"],["/post/57453.html","c4d40cf1038f9d8ede076d253c80cf6e"],["/post/57671.html","4770eb506ca18cad33bf811bff2de083"],["/post/58313.html","2821d0f52bc7205cc2741406f557169d"],["/post/58481.html","576cc19464d2259b4131a6f3fcdaf83f"],["/post/58986.html","ba520422db5ad4a92e860acc30ee9bb7"],["/post/59431.html","cfee3ced2d30ca2196e3436616d9e525"],["/post/5951da65.html","3e6e539476169c7f0c820b972dac5076"],["/post/5be7e977.html","529a7284e02a23efe597610eef94117e"],["/post/5f9e4eff.html","70fdb543855835ce1af61e53543f39cc"],["/post/604b49d0.html","f24482a6a5043491e87c9ab5f604c179"],["/post/61312.html","5318ca33c308631cab6a27efaf41195c"],["/post/61738.html","ecffdfc6e50fe2e2f961abb9f953ecea"],["/post/61809.html","342350439c2d07f5b3ed2a90474582d3"],["/post/61eaf19a.html","d4a38d3ca08824f857f5936d8bca5ff6"],["/post/63002.html","8076549fe7d88347a4ad170252ebac7b"],["/post/63711.html","f9cf421f674d038ea0084ee4b4f8d6d8"],["/post/6587.html","4905b50d1b79d892f49131a07a218736"],["/post/6589.html","20a0e42e29c265e1884da6738045f828"],["/post/6880.html","5585f6921985e0a6e413708bc336e013"],["/post/70263071.html","459262cffe0d32256a93d8ed9466ce28"],["/post/71038564.html","24002ccc33bcd04f99cb0f83743982f1"],["/post/7119.html","d8e24c675e2689fc51765e179e45c2ae"],["/post/74e7fdff.html","83e0a1f71288430211b7bbe3a7a147ab"],["/post/7502.html","afd460c4977eba0eabcb404370598909"],["/post/7564.html","b1c843139d4591d65df8c9eac800980a"],["/post/766f9b60.html","3d1a0fc2e258b819cf0fbfc0723c5e23"],["/post/7ca31f7.html","98db7c08b76d8a2cc9fd77f1bc026282"],["/post/7d1c86da.html","0e7fac3ae9fb2d84f3446ffae14d05f0"],["/post/7f3bcd7f.html","e3a5fa9ff6a8bce00feccf482eb1dc2f"],["/post/8039.html","0778a1ba1f0d686c0d6e6891c9d950b9"],["/post/8050.html","14d85b1c2b5250c5eb21bb7e2112ec47"],["/post/8072.html","d0a4e5cf6de479e2611e4e267713efbc"],["/post/8274.html","33e5a921c9857b4e84cf7e4761a7b235"],["/post/8372.html","a40b1de429d81367dba82366d4e3a5f0"],["/post/8498.html","60431f2ac394556d03d9856fa24ba1d2"],["/post/85b4e13b.html","57ddcb8e099cddbb06370727a7daea42"],["/post/912b2566.html","07cfd844d673d5b35dd0dfd2929db1aa"],["/post/9187.html","b3b90d1da0609eb5d54039e2d392778c"],["/post/9197.html","0ce195d6a1c4ff2bbaf60c648e468d2f"],["/post/94ceb2fd.html","333b4404befd5ceffeec4054e5c7d428"],["/post/95495db.html","cd2b1999eff95f37c15967493ec6f189"],["/post/97246020.html","c2dfdd8f61fe685e24934384f93f1a08"],["/post/a3a786d6.html","eed2f64c13d3b86b067d9f367b4b033e"],["/post/a444b428.html","89330c89cfbec53aa30967e29ce4e00d"],["/post/a50b8908.html","0eedcb485b443bb3569826eab3c2dac0"],["/post/aa1eade8.html","356941bfd81e9d4b420508f207673a55"],["/post/ade8c6d6.html","448efcbec569b777b7a98b60f11963e9"],["/post/ae8362df.html","9f14656501483d95844ca550197e2a8a"],["/post/b4c1d206.html","1ed4812e6e815814ba7fc274806135cc"],["/post/d431fab4.html","72ba3dd73305e0dfa63fbeb87282a6aa"],["/post/d5381517.html","75144a2310f2a3be17c7d3de2e7382e2"],["/post/e058ffd8.html","6f372c634f37c7dc4d64b6cd49f8809f"],["/post/e0f8cb74.html","040c64574a3d0e3a65c9aad6a6992e0d"],["/post/eefe591f.html","66c79515e1787aa0622b1bfe36e4f2cc"],["/post/ef296a07.html","42a95b6ce6a6de8907ec1725f565838d"],["/post/f201f9fd.html","61bdcc7e09fd85724ff94bdd01c036c2"],["/post/f79e4123.html","6304fe8368cda885906b542737c1986a"],["/post/f8648a1d.html","a5b8ba57ec5b798d1384cdcaec197558"],["/post/f89cb603.html","c00f3b0f128362d13f630ea514da3a96"],["/post/fa288682.html","33da457158437876d3a16ca9f7a9f828"],["/sw-register.js","85ca1f5826c5bfc918197347eb0e3b7e"],["/tags/AT-T/index.html","f1a82b9f6b2871b4d28c717eff2a04b2"],["/tags/index.html","d85286f2cb6b2005f33dae0dfd6643e6"],["/tags/动态规划/index.html","0c911cdb3604dd5d76d21298d1f5a584"],["/tags/字符串/index.html","271bcb2ff7bf4e3ba0abb4c3614c146e"],["/tags/字符常量/index.html","b868853839ac76c1674e98b5b0af30bf"],["/tags/快排/index.html","62858154e9805ce8d79fed9e6f56c67f"],["/tags/排序/index.html","71dcbd33fe96263184d02971529bf393"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});





/* eslint-enable */
