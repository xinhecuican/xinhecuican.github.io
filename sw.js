/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","ec6761b5711bb40a7ab58297b3963e06"],["/archives/2019/index.html","f77617f779f47abd1088456bfd1f9788"],["/archives/2020/01/index.html","af92d3430a5483236e66eeb9771c0a05"],["/archives/2020/01/page/2/index.html","9533f97ab11b45e7a1b583c212f364d4"],["/archives/2020/01/page/3/index.html","20e530e063d432206a0560fa2b56ee89"],["/archives/2020/01/page/4/index.html","e2dd646bbfb2236d8dc19d9c76c220d5"],["/archives/2020/01/page/5/index.html","3c20179274dde059a797d2ce2123455e"],["/archives/2020/01/page/6/index.html","bd808c0ab7f1da36947c762b1449fcf6"],["/archives/2020/02/index.html","f9fdc4e52c33cb6c6c14bda3c77fcf11"],["/archives/2020/02/page/2/index.html","0f1c9cb254c89e89298cabbfffc0da34"],["/archives/2020/02/page/3/index.html","e9363bf175ccc494d386855adaaf2c3d"],["/archives/2020/03/index.html","ffaf29777c19d4f1d0fe0a0ab1da8e48"],["/archives/2020/03/page/2/index.html","19501f010e9e5281172b5b61eacdad1e"],["/archives/2020/04/index.html","50c8229d09db28a7e3b16acad0d04e4f"],["/archives/2020/04/page/2/index.html","ad4b88de63ddcacce0957a835b2e4c4d"],["/archives/2020/05/index.html","cb2603880fa1b70e171c36091cc64fb4"],["/archives/2020/05/page/2/index.html","b8b0c817575507019cb39aca151ac0c5"],["/archives/2020/06/index.html","280beee4b4c2316fbb5ce111723ef03a"],["/archives/2020/07/index.html","858d24418fb59838a13f63f067e90362"],["/archives/2020/07/page/2/index.html","403d7189e0378d5799b6fc5746c9c8ae"],["/archives/2020/08/index.html","81fb9738d3712dea53c823357a682430"],["/archives/2020/10/index.html","1d292306e3be14abb4930286a1f377fb"],["/archives/2020/11/index.html","1cfc3e8d4524932d19eae6038ff20ba8"],["/archives/2020/12/index.html","1a630279c82ee37764a93b440469f5c3"],["/archives/2020/index.html","3516170921af65eb0382b0f85223106a"],["/archives/2020/page/10/index.html","c90da149b54d9b3e41d913e56b0af786"],["/archives/2020/page/11/index.html","8c3d5ed9952b338d121394a8f5dba0dc"],["/archives/2020/page/12/index.html","ebbfb25225406cae40054f1959262651"],["/archives/2020/page/13/index.html","037df5766ad8c82d0b7df949636d7766"],["/archives/2020/page/14/index.html","2a2a3c447f398db59f21151620b21609"],["/archives/2020/page/15/index.html","dccc5a4f8258c455d0186d4bad3ea138"],["/archives/2020/page/16/index.html","e6e289984cac013715eba779b7aa8118"],["/archives/2020/page/2/index.html","84ef406c8f1ac6b9cd5d40d19a6aa9f1"],["/archives/2020/page/3/index.html","dc8368f55b1e0940c9b395df7b697e0e"],["/archives/2020/page/4/index.html","fc0795c3f90f2591ff3635bae113b131"],["/archives/2020/page/5/index.html","31a4bef40d896565097d7fd1e216ba79"],["/archives/2020/page/6/index.html","006c4d2ea56f1e7188561ed9ea1ba23f"],["/archives/2020/page/7/index.html","85aa555b7efb0cfc496dce7e04a1d44c"],["/archives/2020/page/8/index.html","c4df4b0b4884765638bca46b9cd9bf99"],["/archives/2020/page/9/index.html","d224a8f37f1f019fc67a33424f894b7c"],["/archives/index.html","aaa4c23e0d934d22e041a2a4b8494fe5"],["/archives/page/10/index.html","d6897d0ddf890df8ee4f02701b997789"],["/archives/page/11/index.html","861993488c079596b9cab333c1c437e6"],["/archives/page/12/index.html","9700a0ed00e3170caa385080fb759ea0"],["/archives/page/13/index.html","23a5a96aec385f7b77740ce731973b4a"],["/archives/page/14/index.html","089a78d7b2b63e2a7126ada480a9089e"],["/archives/page/15/index.html","0287774a4cadaa92c9d829c70a2e8342"],["/archives/page/16/index.html","c9f440615bc642ea6089374f172d83fd"],["/archives/page/2/index.html","35a536c5b77e514f115220737588ffc4"],["/archives/page/3/index.html","5f4c4f6b2ec9622136261f8bea8e9700"],["/archives/page/4/index.html","23c160dd15c737e81131f08c9d217487"],["/archives/page/5/index.html","0322e3c386bfdb0a28b21abee7b6fd3b"],["/archives/page/6/index.html","0543cba436d792ef707817e7ecdeba31"],["/archives/page/7/index.html","6308e934d1262a9034886b74b5e5eb5c"],["/archives/page/8/index.html","1a6a514149e4bb63b16cccc0cf34eb8f"],["/archives/page/9/index.html","1eb3fc80678ff218574ee376e77a2d12"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","69b1af5d4ba2bb847fe40f703eec1724"],["/categories/Linux/page/2/index.html","066a4790b4f56e8bf55e0cc77c2b120b"],["/categories/Python/index.html","3ad5abdd9f521a8a0db2666239261c7c"],["/categories/c/index.html","28aab69a9846d37325aaf832bbed0fd2"],["/categories/index.html","e0365beebf6105a56f409825446ad2fb"],["/categories/java/index.html","e238ad705ab2a15325572863602e39f4"],["/categories/java/page/2/index.html","3d385ac30ddae0c9dd14c9e624f535d7"],["/categories/java/page/3/index.html","417eb56c8b923497909a6cbf02b93073"],["/categories/next/index.html","f271cb55814cd8dafee63dd62dae7638"],["/categories/stl/index.html","d6375a45da3250d9fcdc62ea4bf15d09"],["/categories/windows/index.html","98576e108462aa35d02479e50b3253ea"],["/categories/基础/c/index.html","993ba6bef920707e16cd1cfbf4ec3335"],["/categories/基础/index.html","834ce3a7c20bc1d3ad5ffe6fa8fbd1a3"],["/categories/基础/page/2/index.html","e441f248bbc2ee3f6c5228e1503ecdaa"],["/categories/数学/index.html","d52086a3c2242452bf86bab3763f38f1"],["/categories/数学/概率论/index.html","6c20552c485ab04d775614afab4675be"],["/categories/数据结构/index.html","2a3149f01d3a4ff013bb570053267b61"],["/categories/数据结构/算法/index.html","581b93f40e0999f422787536a5afb768"],["/categories/机器学习/index.html","55294210dd2dd8377ce1fc30b6454299"],["/categories/汇编/AT-T/index.html","d5a56d566de8b29492ea7df2c778d297"],["/categories/汇编/index.html","88c0cc02243a7436f062852ac8c6e628"],["/categories/汇编/page/2/index.html","f1d8a974b135b91bd767119326422a97"],["/categories/汇编/page/3/index.html","55c8e5300e09b066cfa953e3dec6621c"],["/categories/算法/index.html","11b0aedca9ea65579b87549429ac5cb5"],["/categories/算法/page/2/index.html","d1e277fbb7112b9497808b82fa4f6896"],["/categories/计算机系统基础/index.html","822a5e63a99fbcc66924dd2ec442c8fb"],["/css/background.css","39b1b22e2903e556913dc52516e1e7de"],["/css/index.css","81540c084fb756b1a9f1bb2b6a0e134b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","95acd5e952211a5f4408a0d7d746fe90"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","c639bd4fe0a3f3a3fdebea125f4b2700"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","3c9134f62e3915bfe51f82ed3c528534"],["/page/11/index.html","ca59679ebfba044f7319fc9cef25fc70"],["/page/12/index.html","05c94d5bb826df748b92364ef080df49"],["/page/13/index.html","5e7d61805bd26324f59751ab0f2e1b94"],["/page/14/index.html","4674d593bbf6e7a4964b6e01c927f934"],["/page/15/index.html","870ba786bac8b52f40ffd5af70906c26"],["/page/16/index.html","e0b11b5b6ff50a12f136d310f83b3dcd"],["/page/2/index.html","e22f3d6462fa13d2a310927bb92686e4"],["/page/3/index.html","92b7d38bbbd4a448c7f77461d4af5328"],["/page/4/index.html","063a86770205e389d67d2bc2200b0f16"],["/page/5/index.html","b6e2bfb6b2684c9e054148a4e18db1a8"],["/page/6/index.html","a60cb7a33b2e7ef89ecd33101c7f294d"],["/page/7/index.html","a2f55154a348de7c1a93ecf32f6af97b"],["/page/8/index.html","dfe1b5e683c3ed7bd7c627f5cbcc19e1"],["/page/9/index.html","7c8e988eb0562e7d084ed82745728f12"],["/post/10919.html","e09ec33cc9f9e59e2c55a66b9ca10731"],["/post/11051.html","861276854d83bc331faa3deb69d61d69"],["/post/11306.html","364c7c3991bdf57119069544e6ce871a"],["/post/11491.html","e1f91bcbf19b528c33887a5f3a3c39e6"],["/post/11799.html","562877f345ca29a84916ebeaf4b48688"],["/post/12334.html","5fdf40a6aa663dacf5b7c1b92385ea08"],["/post/1326.html","db2d458d79a238a2bf3e02b5ad444696"],["/post/14379.html","aff2b2b436406265c64354b8991f12b3"],["/post/14511.html","2160218587224e1456e8d1fafd8a20fb"],["/post/15201.html","a6b4471a910fe727876ef96f255f34a3"],["/post/15425.html","a4176362e753d9ddd04b1962b6bf1fbc"],["/post/16107.html","0ac0a8b9487b99820e9532d655554f7f"],["/post/17862176.html","7767e271923539ef37420dc7b5970553"],["/post/18431.html","b5d5333730ed3282bb768c69a0f861f9"],["/post/18912.html","d1b7b01111d1d55d1c9ce579f27bfb6e"],["/post/1b9c8662.html","8ea468811ed6ae609d0410f5ef3f432c"],["/post/20198.html","e3e7e82c74158a63aa6df9088e08951e"],["/post/20ff5ccb.html","172b427b649a717fcae78d5a46777fb3"],["/post/21624.html","7214dca23dfe39fb541428558bc6e870"],["/post/2170659a.html","a7287d33f9aad146b07abe6505bb5b49"],["/post/22102.html","f6f5fe6ffbe42b9abe579c1acf131fad"],["/post/22493.html","e582424fe80b71b5aa832aa0edbaa6db"],["/post/235252ea.html","fe3768d8cdb31a21f10b63cf0bda74a8"],["/post/25699.html","a4c881688c3e551de9b778eaac16f16b"],["/post/2647.html","dff7361cfb94db21b2f793033ac950d4"],["/post/26477.html","9bb7f95e75bce1443f7c58970b068ef8"],["/post/26671.html","177cd7be2b4946f066358814ceb6ef46"],["/post/26737.html","5e9ce84a5947535dafdcaad6027c8bd4"],["/post/27045.html","39233f8663313f55e793feb03541f02f"],["/post/27621.html","f7752bd989025985a1161350c835dc4b"],["/post/27890.html","dc4103f64fede7cf4d94626443c27ed3"],["/post/27980.html","88e06059769ea8878795386b8b9c9977"],["/post/280b588e.html","71e2c32a528e4419616566a4f78a7278"],["/post/28579.html","3c40aba4fba1e7ef10771d78bd936ff6"],["/post/28877bf.html","bda6b18c5a0326969541e956959fd176"],["/post/28954.html","6836145434a9e56b5056b2cd0d00d418"],["/post/29378.html","8745a21d7f6602777280b48e0bc11837"],["/post/29949.html","0ed07ad3f35bb468772499546f3002ca"],["/post/2ae43b86.html","e4c8a5619800b6c1ad91050ba37cbe59"],["/post/2ba82a45.html","dec3382ce9bd6fafb8720aa368704ad8"],["/post/30072.html","4b597f1b5eb8477a4076f5c675adad2e"],["/post/30479.html","98b7185ce6b3ddb5a0be0514cef7dc21"],["/post/31a6b40.html","b298b917fb8a305b607193c7d0efcc49"],["/post/325cdbf2.html","fb496fdf0ad8cef91183bef4480c6c0a"],["/post/3319ed9a.html","3635585a98cb4d941eee85e087b6cac6"],["/post/3320.html","9e88519877fe1598f2cc0612c861bcbf"],["/post/33cb1151.html","9b071271d804e237d790a56a8dc01edc"],["/post/348d4e04.html","7170d55fbb395fce9902c3fa36d11724"],["/post/3526.html","cbdd3f3bd22392fe629e5159633814f5"],["/post/35532.html","cc50cbe943608560c1b94de038fd0ec9"],["/post/35848.html","fc915c12c518cf16d42529e89e3178ff"],["/post/37318.html","4482ce4d7ce9966b717a7c085a1deab7"],["/post/37663.html","67f61825fd7e976c53e430511a73a96c"],["/post/38035.html","aaf4bf05b17933d9e3a3cee84805a3c9"],["/post/38072.html","0fdd65738490abdce7c44f242cd5ef6c"],["/post/38145.html","8bbe08e61a528e705bffca4cefb2c795"],["/post/39968.html","14e76161852a50f5ff7bd80e6ce91ca8"],["/post/3de4bc69.html","43b982e4c9256bbbf0811688aff401a7"],["/post/40583.html","a1b59dc95a536d1be9fb88c4c3250e30"],["/post/40997091.html","70ee5d776f1c6226ef54fa287c90acc9"],["/post/41129.html","43e9d1b24a8e82ce3da6a6be9956310c"],["/post/41763.html","67c7bcc7e5fcbf2a7717060817de7027"],["/post/41829.html","a3abaa929cce4dd5b102e17524478e79"],["/post/41840.html","b94229aab05fd5d6c5007a359900d02a"],["/post/43817.html","9eb10ae0b2442dcd492683339ef6389d"],["/post/43878.html","8b80269a9d266669f55a1332a95a5bc6"],["/post/44250.html","8e70364669cb8f49260bf506aee3c9e4"],["/post/44336.html","7d6a7f5d977acb0122fb6c62a5aa506f"],["/post/44454.html","b201d51534cddbd913da476fed9544ad"],["/post/44487.html","b90af8277629ad9ba9889c4efa13a49f"],["/post/44914.html","5c2168f06d0a48c4687a1ab63ae109f9"],["/post/4551c130.html","e5a46fe3e00c6d74effc6e1b132acdfa"],["/post/455a4c92.html","c143ed39d27ed331355d0eb0480b8441"],["/post/46466.html","721c3378c8fa535c833ce1835bea9688"],["/post/46925.html","c493f0e65fdb54e4d77a52946e55e551"],["/post/47075.html","20a94aaa2148d8e237d794e4e5b2b37d"],["/post/48220.html","8ca9d0e5c00a8596fa1e67d687c3e13b"],["/post/4b1879e3.html","2476dddb7e9697c7fca1136bbad2e60a"],["/post/4c720881.html","4a4f1e083419d2e343894aa20cd6b68a"],["/post/50daec4.html","4b06cf1bd39b1eb3f5791f27d3a56564"],["/post/51491.html","1de692b4324b7fc94ad97ddde685bcb1"],["/post/51e63dcf.html","b8aaefde65afb50790c664d29f1ed998"],["/post/52078.html","01a492f16de94ab7098461c968c75210"],["/post/53677394.html","f46a935b9a8abc627993900086ed4dbc"],["/post/54300.html","b4962cb97b9eab0f0bfbfbba3cdea5e2"],["/post/54612.html","678990019ae91bd3584e66a8f512100a"],["/post/54613.html","7c9520c0dbceb967ed3a2674398f957a"],["/post/54708.html","390f3387b24cc5db77a9dbdbc7ed5cd3"],["/post/54778.html","dc4522066efc8efe727fe4c661199961"],["/post/5490.html","ca1de8ddb024a57161ccbda12a216265"],["/post/55046.html","52cad9dc2971d62df5ab31901564e3ef"],["/post/56929.html","7d14316d9f6d53cb2c1a47e15b847f5a"],["/post/57339.html","62b7e7328919d1c0b5bddbe563a41c1c"],["/post/57449.html","ae0aa10e50653c1a88c5bf47f0437b05"],["/post/57453.html","1011954d936c41e1ed57a6cde0a9b00e"],["/post/57671.html","63e7e027f57cfc8acbb589f26a39ccf2"],["/post/58313.html","328c79801dd45c8634647f666af878bb"],["/post/58481.html","6d7582f68cec7197a08f869f0913032f"],["/post/58986.html","029529cf191320ff8b1ab69f2d459dba"],["/post/59431.html","1b343da27e603c004b359a5d3c34f6d2"],["/post/5951da65.html","bd3f9314016ee94109358ab375e8c6e8"],["/post/5be7e977.html","cfc136ff695f4b56a5147cb3d3bd3a9a"],["/post/5f9e4eff.html","cd84a289cf89034e61539c99be4bc08e"],["/post/604b49d0.html","44e1d601b8ab442a8ab4cb47254f8e1f"],["/post/61312.html","77be55227b340156cf91a56abbf926c4"],["/post/61738.html","fecf2e7f40b9d039016aec8230fd19e7"],["/post/61809.html","47e6ddb3cfec3bf8aa0cde72a5b06fe9"],["/post/61eaf19a.html","350400b03c92cba4f24a408087a13981"],["/post/63002.html","b1cab1151cd8f3f73f40a5328a8c089e"],["/post/63711.html","cf1e220bc762d95291269470c8ca2afc"],["/post/6587.html","bd97d7b254aed42c5a88bd9fb7242c91"],["/post/6589.html","b80b39456f5207905e89dcb2735d987d"],["/post/6880.html","8d1dc86a3b60e3dd289b9d0266727dd7"],["/post/70263071.html","6710e348142ad00fd514e25f7593ff61"],["/post/71038564.html","a13496f814943bb3cf309e2eddeeef10"],["/post/7119.html","99a3c501dcb45f89725d7b736a25ca85"],["/post/74e7fdff.html","d0561e8be721d4227267012a804ba907"],["/post/7502.html","1fa66eb37e064fc2088e1a1cef00c054"],["/post/7564.html","7aa1a9c8abb9be252f03e4fcf8d08435"],["/post/766f9b60.html","d86e555e613c64d929f21f15467da3b7"],["/post/7ca31f7.html","d7aef3b7b9448f81e0a11bf86f9d9294"],["/post/7d1c86da.html","bc5333ee6206d361f8beefcb610fdc34"],["/post/7f3bcd7f.html","e085dcb97ecc82f190420386d24c2379"],["/post/8039.html","444fb6114bda9a90435977d7f0f11186"],["/post/8050.html","337a348574561200dc5726983098b74e"],["/post/8072.html","332c0337be7937d63b40d2f476dc2948"],["/post/8274.html","a4376eba576cc0fa2b2e12ee8183d0f9"],["/post/8372.html","8eda0b6495432332314d6a86d5f61c70"],["/post/8498.html","3f65a5e3efab4e0baa449272d49842bd"],["/post/85b4e13b.html","141f09f95cf0dad7f08c1139427c1614"],["/post/912b2566.html","e523fd6261202c51f4f8717e08819282"],["/post/9187.html","b350c973da232ff0c2efe6e9d75a11d2"],["/post/9197.html","70cb76d03ecfd735eade76170c89f1e4"],["/post/94ceb2fd.html","32c2ed96b020b37802fc2af9619b6cfa"],["/post/95495db.html","8d77aff1e7547bf2b1c560532ce68044"],["/post/97246020.html","504acb1257f50aa5095b2c58f31b9641"],["/post/a3a786d6.html","590512bcbbf5f78f6021b10e98d379f5"],["/post/a444b428.html","06eaafdd352acd26237be523bbb1a166"],["/post/a50b8908.html","a7bd92e5c4eab2bafe8fc0ea9f9b31ad"],["/post/aa1eade8.html","600802cac35016cb862b6afcdb544668"],["/post/ade8c6d6.html","e8540cff8d72214d6e36bdc1229045bf"],["/post/ae8362df.html","5058ea955f7cca4b5424190a66f0bf4a"],["/post/b4c1d206.html","6af52f937c3411b0a48238eb398dbaa6"],["/post/d431fab4.html","e6aed06ae8a38c4d47cafa19c7929093"],["/post/d5381517.html","34245de03975b4da23c599669e5d7012"],["/post/e058ffd8.html","ce429f00f17c0b8842e1fb962b48ed28"],["/post/e0f8cb74.html","e820a9b6c333e0960e29f0fa4a02c485"],["/post/eefe591f.html","98b39c2da5db617a504545d4a080eb4b"],["/post/ef296a07.html","96d9bd2aad32095d70e3fed0d1c37349"],["/post/f201f9fd.html","384ea0e5ed774f3ba32007f6c533756a"],["/post/f79e4123.html","342dd607caf2fafe30e9648fe13f4c22"],["/post/f8648a1d.html","4567a8d8b19b67cc0c130552bb233e0f"],["/post/f89cb603.html","53361060bdbbfba9e328392a18938182"],["/post/fa288682.html","e2f9d88ffe6e75481bb4b59c35cf2a1c"],["/sw-register.js","24c06abbca954b252cffcd88b6a89ad0"],["/tags/AT-T/index.html","1f39f5ef643cd7ce9b73cf3974afd18d"],["/tags/index.html","abcf2aef97617c62cfe4042bea93df2a"],["/tags/动态规划/index.html","77829182372d8b23e4f7f26b91bebee3"],["/tags/字符串/index.html","dcef37f3c2cd97416d091f56f5296c23"],["/tags/字符常量/index.html","cfd0d9f5926ef74d68e3787e2e8a60b1"],["/tags/快排/index.html","c5fa93e109c6658ea868b2ef317ddbda"],["/tags/排序/index.html","0ecf3a1d82f4f0d27e3a17390c5ac97d"]];
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
