/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","c9ce4f0c0d1d3503be96afa6cec5454b"],["/archives/2019/index.html","9d952f16ebd8bc04228c17b8ed1bad0f"],["/archives/2020/01/index.html","b7277e2bc16038f1d67bf83e8e982aaf"],["/archives/2020/01/page/2/index.html","ef2a3a533be98064d55b93fa47fdd66a"],["/archives/2020/01/page/3/index.html","82bced0c36bb4afd738b930b3eb53a53"],["/archives/2020/01/page/4/index.html","1ba91527d1084cb1b47c77d5732cc1e4"],["/archives/2020/01/page/5/index.html","d112d68d9ef9bfae0ac847098c6cc705"],["/archives/2020/01/page/6/index.html","999f1ca98fa4e4f5b63de3f8376e49e2"],["/archives/2020/02/index.html","d1f7d902a45adecac9ed252b827fe86c"],["/archives/2020/02/page/2/index.html","7994cefab1eb8ae0cb74908ebba02197"],["/archives/2020/02/page/3/index.html","3e7db0c9abfb4b94ae77aedee57426c4"],["/archives/2020/03/index.html","a65f10900b5e222b5f615ea817a6d6bd"],["/archives/2020/03/page/2/index.html","2a9958ed0580acd78a0867da73938578"],["/archives/2020/04/index.html","513d55d8d3d20bbade6fc29cf6173928"],["/archives/2020/04/page/2/index.html","6876eef2651556e03366d5bcb8fbf92e"],["/archives/2020/05/index.html","9907d4123ff4399efb42cd24c05dba3a"],["/archives/2020/05/page/2/index.html","26664276eec7f1fd6e47f5ed50a74b83"],["/archives/2020/06/index.html","e27bc3874432c6678138d5c71580b8c8"],["/archives/2020/07/index.html","27db41ac2e1987c93173841af62a2ded"],["/archives/2020/07/page/2/index.html","e2d846b24604c127d7249e6741c6493d"],["/archives/2020/08/index.html","634f812ef0e5d6dec0e3050a738daf6d"],["/archives/2020/10/index.html","2f742206897e7ff7cbdc32e18d2b1ec4"],["/archives/2020/11/index.html","83e929f70259f4d49cf749b8dbd55145"],["/archives/2020/12/index.html","27775260f66276efcc4dc220997b43a8"],["/archives/2020/index.html","7e7371387e371ae34cba680124808c44"],["/archives/2020/page/10/index.html","d32a7d498fd9fc3fc4dbfb220c2f9037"],["/archives/2020/page/11/index.html","f77c85ddd38ce3883738d428006d891c"],["/archives/2020/page/12/index.html","62e0c618ca253d621af15a564cabcb92"],["/archives/2020/page/13/index.html","4de14e02fea6bcaeb8371d14bb748a56"],["/archives/2020/page/14/index.html","999abcfac9cc10a24004304a87c88a0a"],["/archives/2020/page/15/index.html","9ffda2f08af1b3435874f6610c33b6e0"],["/archives/2020/page/16/index.html","1aa2f6069c209a23acb7931c0929e85d"],["/archives/2020/page/2/index.html","14bf5a2fe815b8965894bb8f066b8f38"],["/archives/2020/page/3/index.html","676d8fac37a17dd4d90e27eeb519a2da"],["/archives/2020/page/4/index.html","c1b28986641f461947d392e679631d43"],["/archives/2020/page/5/index.html","6f91365863120d2182b8202e0f104398"],["/archives/2020/page/6/index.html","cbeabf9faf06788e60a1b0d00df6de16"],["/archives/2020/page/7/index.html","8fe395b6d24448123c74403cf496de85"],["/archives/2020/page/8/index.html","b6b4fac0ba04ea1755fff5ccbaab454d"],["/archives/2020/page/9/index.html","632c64dac58e1ce10058dfe9bb1bc91b"],["/archives/2021/01/index.html","a364a82fd9ba9a0b53c532f924d373c5"],["/archives/2021/02/index.html","a8ceb708639fb97f691dd794b18e1907"],["/archives/2021/index.html","7ce0ee513ba4516e551454bdacb19962"],["/archives/index.html","6699b3ed5f222f74df6141e973668d17"],["/archives/page/10/index.html","99c311d279a70561ab3d07ee7192fecc"],["/archives/page/11/index.html","842fa89273946da99658e8449aa6a3ef"],["/archives/page/12/index.html","8188bfa13635d91fcb1a1580cdf65dca"],["/archives/page/13/index.html","64c59daeb8258a457569e46e0a21c89e"],["/archives/page/14/index.html","f67287d6b8a20ede867ae8a5591e3df8"],["/archives/page/15/index.html","9e5b6aa9746f9fbbc2f2069b5a2e4b08"],["/archives/page/16/index.html","3c0fcab8a925a3cbd07c085982f89de5"],["/archives/page/17/index.html","7787c9670177add8d207ceff5b426e5c"],["/archives/page/2/index.html","acd1cc12f84004afce94dbf2437d5a83"],["/archives/page/3/index.html","22028a238bff462670a49263ddb0272d"],["/archives/page/4/index.html","6b85482cb4b1a2c302c318c13388a6e6"],["/archives/page/5/index.html","55e32f396160aa2604e1c992dae880e9"],["/archives/page/6/index.html","f7a3f01c4cd99938f3f489ad43c7494d"],["/archives/page/7/index.html","d5e7ab44c9af12af9d4b4badb9f12731"],["/archives/page/8/index.html","23d6e259020e64ea98270f1ddb68409f"],["/archives/page/9/index.html","a478acd05776e1c460fe301319441bbe"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","7c9a7905dad2d41ac26a8f8e997b5f26"],["/categories/Linux/page/2/index.html","245071a826d9de21f4fa78064eae4162"],["/categories/MySQL/index.html","15a743cc94fe019f4bc48e5b3b43fc3a"],["/categories/Python/index.html","558c1559d8772526c7c76c84a1d4ffa2"],["/categories/c/index.html","f83b6cc6e527775aca0f2707a597c723"],["/categories/index.html","bfd07eee9f0b8069587ae3ef8e363f25"],["/categories/java/index.html","563d544c689614a63ee895eebe253f31"],["/categories/java/page/2/index.html","402cedaa98fff2ae7fd1a251141c55db"],["/categories/java/page/3/index.html","0085a92e7502fb7de4215919cbe542b9"],["/categories/next/index.html","6eecbfcf2139dffcedf11ebef558bd22"],["/categories/stl/index.html","9fc1d89679cd6c1735a55fe7e05ec1b9"],["/categories/windows/index.html","fc8dc35bd2421a3fdf9f62853cd91fad"],["/categories/基础/c/index.html","e68fd589718c67f3455f228376bb86fa"],["/categories/基础/index.html","4ae0f81f2720a303e06c875fd7ab83fb"],["/categories/基础/page/2/index.html","1dbe8e249b8822e05754aa68c975c99c"],["/categories/数学/index.html","7d7c596cd4bce799955d97d9534d0b9b"],["/categories/数学/概率论/index.html","17e65cf508f845498d768ee21e350b13"],["/categories/数据结构/index.html","7451d716cca129ec89069605a65a40e1"],["/categories/数据结构/算法/index.html","a62f2d61d8a6a47b8b9df8259cc65899"],["/categories/机器学习/index.html","4f01a1b62ae7ad3cf37d521aefa29472"],["/categories/杂项/index.html","dfe83a267d3c23a5338a4551181da2b2"],["/categories/汇编/AT-T/index.html","d845a10cbdf1be2c9a85586b759f8834"],["/categories/汇编/index.html","ff548f40c24a28f29fe691beb588297b"],["/categories/汇编/page/2/index.html","71ed025310fbfdc8dd9b45adab4ba4a6"],["/categories/汇编/page/3/index.html","224ed98fd96f3192f85f6110837fb353"],["/categories/算法/index.html","fb0116c0f2e5be86d27d9b232cb6e65f"],["/categories/算法/page/2/index.html","c36ec27824586dcd22974f5ee58180c7"],["/categories/算法/page/3/index.html","c551816c6ef041b0343bd9d5b0c0f039"],["/categories/网络/index.html","eea52057d46c4193b02da73987c387d0"],["/categories/计算机系统基础/index.html","407590d2c8c4eefb7435d54c09fa7f6a"],["/categories/计算机系统基础/page/2/index.html","f00682c62b0285f89db0fe164ee781a8"],["/categories/逆向/index.html","f2890b9788c29dd6869e71377ff0034e"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/HTTP1.jpg","30e1bea7769f2cec34130f180904cf65"],["/images/PE文件1.jpg","9f673b828bd69f07e1a3c646ecd4367c"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/字符串匹配2.png","a2178ecdbd4061940f57c5ad7a3d3a29"],["/images/字符串匹配3.jpg","62ad48f6df4067ac8ba78fae289aec41"],["/images/应用层与HTTP协议3.jpg","9f8dd77e70aa4f6ceb5f6ff52999486c"],["/images/应用层与HTTP协议4.jpg","2d79dee035b8a557b74c312cb88790b7"],["/images/应用层与HTTP协议5.gif","a669d1cf7e5033dd80ff8544273c0f1d"],["/images/应用层与HTTP协议6.jpg","b7dc39f7cc8f5e8fce7625aaf9639726"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/引用层与HTTP协议2.png","87559bf7ba74bffe37c156d4ac8173ec"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/运输层.jpg","5b0a17debdd2b880203ee18d4779c5ad"],["/images/运输层3.jpg","b9a70cc24bc81ccf9f94770936a7dd50"],["/images/运输层4.jpg","67b41ea674abb2d6d422639593c0acbd"],["/images/运输层5.jpg","570ddaa64331a62f84e97fd6dc96d15a"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","0e3093988addf058328246cdd6e91a67"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","eaf7cbc1aa58b25211c34eb6319b5164"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","dd653aa4c7ce2e0f9fb9cf6774483b35"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","d23cc93529da951d074622c00d997f2f"],["/page/11/index.html","5316e65ea5954ba916494c6f95cdbc81"],["/page/12/index.html","5c82e8caa999c253c191dd34bf4dbb1d"],["/page/13/index.html","d67aaec2d42f335187240ff8d97a57a1"],["/page/14/index.html","b60f08bf5e1b9e6934e97dfdccd749e3"],["/page/15/index.html","5a79dad610fbe65c5a93623b22f54d9c"],["/page/16/index.html","76704c387757d4542f210e970942c650"],["/page/17/index.html","8a8131cf6ae513d06561b691ea098582"],["/page/2/index.html","d1a3a80d98d33da46f3c6d220ffc5a88"],["/page/3/index.html","70b9e9d7461ed27de4eda0566ac5d95b"],["/page/4/index.html","ffc6d7ac167914ace274b95c5663fec2"],["/page/5/index.html","d8eaf4fd293b8d74b09f1830bb2a1094"],["/page/6/index.html","279829492b6c578bbe8e9d6ca5aaaf01"],["/page/7/index.html","bb1dc9a88dc59d9b73d3fc4a9504f7f8"],["/page/8/index.html","f9a64832d720201bd8262b944f8b82c2"],["/page/9/index.html","e5865552b59a1586b1c68d14559e139c"],["/post/10919.html","0277245fdcb4051fd52c9a75d06f13eb"],["/post/11051.html","8461d47ef626d74a3463443733c85d52"],["/post/11306.html","89a005a18241557496264297687b0936"],["/post/11491.html","ccb02ac015dcb125c93c413abf992117"],["/post/11799.html","f4f3dbe067590c1aceda713d71f4f8a0"],["/post/12334.html","a7ca21e390d38531bd616b3e8cfc93a2"],["/post/1326.html","f92f4942ef3f11eeaff1ed526eafd5aa"],["/post/14379.html","7e016adcdd79a97fb256c9d8d7b0b502"],["/post/14511.html","fa1bf770984d9031c46207f614d341cb"],["/post/15201.html","16f95a891ed4bfe6610b1a3789d390f5"],["/post/15425.html","b790cccfcf7433d4a03e5c9a61479802"],["/post/16107.html","f577f5964c4d845902e11af2404cf51c"],["/post/16e2846c.html","90bb2bcf6b20c168bb66f9c2804d13c8"],["/post/17862176.html","b1409535c66e62d6c6ca119e66384d0c"],["/post/18431.html","1396eb46ce7df33414111968dc73518f"],["/post/18912.html","56b178d28258f4486464dfa016321b21"],["/post/1b9c8662.html","98763bd5a47ac77ac43d86edffebd74a"],["/post/20198.html","4cd691afe15cef9e1624e3be227a3728"],["/post/20ff5ccb.html","ed643492424f1ca9cf3f3d3eac58c87c"],["/post/21624.html","7b8a6064436de12ba721c3c7c0515492"],["/post/2170659a.html","70f7574ea4d377f885b624621b656fe8"],["/post/22102.html","931eaf6f719e40b9a3679a080221261e"],["/post/22493.html","a0bd64232522f9c0c09a527089083417"],["/post/235252ea.html","0d6951a82496486037b9af50222673d2"],["/post/25699.html","f33aeba85087878be8c346e9cad1490f"],["/post/2647.html","5193107cf3382e4b06b532b8ff1e2c6a"],["/post/26477.html","a45c6d16d06b94f0e7feb86f86df1f83"],["/post/26671.html","db52426073f06c7be4c8e84f0ec0d542"],["/post/26737.html","1130ec668060d77bfb37e6358d2ceda1"],["/post/27045.html","e6ebc9f6fcf486d360096c269c06f54f"],["/post/27621.html","15c089e6e1c8d180fad72e57c6caec36"],["/post/27890.html","d061fd5f1d432f20a2c42ec38b14ce08"],["/post/27980.html","fd182e245cb179d39f1616cf0df887e9"],["/post/280b588e.html","f794cc65cc77260f868a8b28d12c474d"],["/post/28579.html","590c4ad70fef365c8d2c3e07e0a9c691"],["/post/28877bf.html","ccba53c5621065386aab9d65579529da"],["/post/28954.html","aef9aa4ba7722315dba46a6d08cd045d"],["/post/29378.html","1ecbfca923cc401c86656a38706c6d81"],["/post/29949.html","b7e05c2d4c51f24d5145360c32e87919"],["/post/2ae43b86.html","ef758e54f6f9a99fce26dc134af3fb61"],["/post/2ba82a45.html","15f937fd75c99f356951d2d63ec4030f"],["/post/2cad8b04.html","1f969d99d097432340733a24095381d8"],["/post/30072.html","0be30abc5d01075eebd93dd951d0cd49"],["/post/30479.html","cf30b70a22d60c8c30fa7eecb5d50e8c"],["/post/31a6b40.html","2a06c20d99ef8e533e2d33e4aa03cd5b"],["/post/325cdbf2.html","38dcfa20c5fdd4c09337e53f98617e6c"],["/post/3319ed9a.html","15855fcbc01d99d56114a39029fab7ce"],["/post/3320.html","2dfb43fadd132420e3bd09d6c1ca40fa"],["/post/33cb1151.html","ef6610081e95cce6357bc50283103b32"],["/post/34811d5f.html","f2e69ffcdb4c040abf63b1e82581a07f"],["/post/348d4e04.html","9883f9f58bc7f0b1d1fdbb0d49249006"],["/post/3526.html","75a83a67255c6e11f6a13604bd27b000"],["/post/35532.html","9e9c7eefc8abc4d17992a2b265eba6b1"],["/post/35848.html","67dc925f50c4eca967ac509105523b56"],["/post/37318.html","f535f7cac8bc3e791db64f4448d55b71"],["/post/37663.html","e341873f9f80b6c542246b445b6b5a65"],["/post/38035.html","61f2f6288c1eea91c84500754bde24b7"],["/post/38072.html","8628983fca5842b3f4acb95d7c8b8a58"],["/post/38145.html","262638c8cc55c27f1b66f591d95ed511"],["/post/39968.html","56919fe28bb808f72552c0bf40f191eb"],["/post/3de4bc69.html","a9310f1b068ef2391fa5435611e743e8"],["/post/40583.html","34a4286528b9f25ad15758433c51ed0d"],["/post/40997091.html","4e38f053b14e3ca5179be260a4a970c9"],["/post/41129.html","0e5e5f199adf876637ecf015e98af95f"],["/post/41763.html","797fc57a2edcae1ea7ebcdb90920408a"],["/post/41829.html","2977068e1b8ec99e85526339547e8be6"],["/post/41840.html","f8eb25b01dd9f683681d05ec25c9042b"],["/post/41e39f2b.html","b522fdf314bc19d41fe4a3dae0daa3e9"],["/post/43817.html","094832778d79dd5f9990384e12cb5262"],["/post/43878.html","a7bb3245fa550232ca004a046f5e4681"],["/post/44250.html","48180f42cd07f9df2df6b81a70a60728"],["/post/44336.html","625ae16685d19e8c8b72dc743b972c22"],["/post/44454.html","4363a64370e2512873caa6ecc00a05d2"],["/post/44487.html","5a6a0b860edc62272f01939b860cac88"],["/post/44914.html","76ee9364379de57ecc9d7e2d03592e96"],["/post/4551c130.html","9e55f99ec6a03a11385a2532c95e3389"],["/post/455a4c92.html","8f9cd0a8d918c5c02fda2210daac1cc4"],["/post/46466.html","ee7755c1aaa62adae5b899894409f0f1"],["/post/46925.html","c02a90e7e15103a0f11ef9b488ac550b"],["/post/47075.html","6fe6dd0e4907753d61b5905e983dc0eb"],["/post/48220.html","857a4e3d6a13aab99fd41c7624bcaf1e"],["/post/4b1879e3.html","d78c4c119b4fce5a2dd7f5d34206ad12"],["/post/4c720881.html","5793415ca00c7c38d3308d1a9d0e2f87"],["/post/50daec4.html","7719f014468a1094c611aa340dbc30e8"],["/post/51491.html","a6c5bce6e7ee87884a88c4b425045b1c"],["/post/51e63dcf.html","d373401594671441520266272166f24d"],["/post/52078.html","c7d228706cd514cc5d524e0c70803054"],["/post/53677394.html","de8b3b42b8b9516fa789040312bc8a18"],["/post/54300.html","8f9cf80422ae44124ac18ff9e493c202"],["/post/54612.html","abcfaae20f8d870170346c848c175b41"],["/post/54613.html","46343649bbf4067f295ba865fa3154b8"],["/post/54708.html","1568e616c22ef23ba332d01689d1c8e3"],["/post/54778.html","2cf56dee29bf611cc5aac40904308a15"],["/post/5490.html","9a4d1a5fe53b6a227d9fe03cc19150e2"],["/post/55046.html","fa70c639fe018432a4b5c65dcbbcd48f"],["/post/56929.html","4bfd2e2efd2f1df2f2d3f1f190542985"],["/post/57339.html","df02f2251fc7b3e60fa4acd184cb23c2"],["/post/57449.html","0e5320cdef1b033b503b7dd4b3b02d09"],["/post/57453.html","c1d0b8ee83333c08cc4340a51f0ed3de"],["/post/57671.html","a19f1bfb814f8827730706bab8b3897b"],["/post/58313.html","1a4e3a31eddaa9ff0b3f8eecb62506e0"],["/post/58481.html","4dca5753b89988642fb5141956c45ab1"],["/post/58986.html","44ef482217366562e616b7e8986854ad"],["/post/59431.html","0f6e686b640a49030386bab37526d4f2"],["/post/5951da65.html","a405081a4a4486086d26ba06287f4770"],["/post/5be7e977.html","431046c69597452864c0cabdf3069a93"],["/post/5f9e4eff.html","20e51ef7fd5a9dd42910f48043f96155"],["/post/604b49d0.html","1b788816dc2ebdb1ae08dd3b8de52a73"],["/post/61312.html","cdf34ed4426809dc2b2b110d4f6bd75b"],["/post/61738.html","68839eeaa87f801226be1390b7c7f111"],["/post/61809.html","2359f6e2b2635c62e611ca70f50422bb"],["/post/61eaf19a.html","1eb28c87c1e70c6337b99b31910a3334"],["/post/63002.html","1e21a7c642f5fd891c27d211699cdffd"],["/post/63711.html","7cc851cb3f0bd1b579bc94cb71dea047"],["/post/6587.html","bd28ae7430a7a73a179cfffe14220fd7"],["/post/6589.html","85dd0094b849ceaac0940fd09422d890"],["/post/67454659.html","1c035c09d55a91cfc2bf093ca8ba9d5a"],["/post/6880.html","b124b3e613d585dcf1d099c8b19f95d5"],["/post/70263071.html","b0ad2648bac8e498572f0c2ae18bc150"],["/post/71038564.html","325c3a81d70d498b97e979f6789fa891"],["/post/7119.html","2bb5267ca0642ef687ea3eaad3c55f2f"],["/post/74e7fdff.html","885716211c6cda10d4d9e5aa313bc959"],["/post/7502.html","b5c9ea774b1d0c1deec96a986fec0dc0"],["/post/7564.html","7030be50b858d8cd9c9c8adde218cbdc"],["/post/766f9b60.html","126b814270c47d44529c1b7daca3fc64"],["/post/7ca31f7.html","8bb5e25439ec9acad09859d5b59b853b"],["/post/7d1c86da.html","16c41ca479ae13d55a36f2a0f0ebf610"],["/post/7f3bcd7f.html","73a0a99d5b92c4851ece5e76ff14162c"],["/post/8039.html","21ec511ac8922123f10459df93311de9"],["/post/8050.html","bab53769e0885b75bfdaa1a2c3efc6a0"],["/post/8072.html","ac0eb184f52da363a0ea17d7d1f24304"],["/post/8274.html","3ee92b3768b452f2c34df5a3b0084c07"],["/post/8372.html","84bed4c58775eb7267b2a7452778a373"],["/post/8498.html","7eda802ea539ef011617ef9b88dacc2f"],["/post/85b4e13b.html","9a1e0dead8078ae064df2e905162b226"],["/post/912b2566.html","a678bc724670d3a2ad1f523b49727441"],["/post/9187.html","4275590b62b053e26857170768402f7f"],["/post/9197.html","29abca944cc46155f46ed6c621dc586d"],["/post/94ceb2fd.html","25f51d8aefe4405bafeff8011ef193bc"],["/post/95495db.html","168b86716dd513b74d10ccd12cf00d4d"],["/post/97246020.html","a470c5d33849a4cb73e1b6d39192e365"],["/post/9954ba8e.html","0c5922424c96668728c8abd47be3e106"],["/post/9d855db5.html","057339c93d3018836a4507a09cebbed3"],["/post/a3a786d6.html","cfaa8209a9c4cb75738dffd896a5199b"],["/post/a444b428.html","8f30ef600d9de0bc10244d921856ef0d"],["/post/a50b8908.html","ad224c3bf8f049abc5d09f881739dd19"],["/post/aa1eade8.html","a1ec1e1d6b566fd4d7ea0106c8c8ec0f"],["/post/ade8c6d6.html","172ced67b14c0d45b2bee7e38ac08628"],["/post/ae8362df.html","d32f2b81a6343c8843afa94ae14df91c"],["/post/af3eed3c.html","8d4e8fb73638def5c70182f70ef86b46"],["/post/b4c1d206.html","bf106ac15f5c28b701ae144552eb5610"],["/post/c82a1c99.html","df65b465baca72b1dc73bddbd9da2d59"],["/post/d213fc7f.html","fd0aa7ad96c00791d1993ea8bc9f1d31"],["/post/d431fab4.html","0249a8e9f2bb2c160889fd221196e6eb"],["/post/d5381517.html","dea91cef982bf94e9eb97e4ef9064975"],["/post/d94f88de.html","a134919465cf55d8ccaafdcfc44198a5"],["/post/e058ffd8.html","6ea1cdecab1fc7f7a5d89e7b239a5e70"],["/post/e0f8cb74.html","b0e46977502c2cc843a4900baef1d2a5"],["/post/eefe591f.html","51ab83484d308e0f26bb8682a4c5e8b8"],["/post/ef296a07.html","7e1e08c021169f8649b9187816c6d058"],["/post/ef3a3fcc.html","95266cc00c830b92d98e776b1e40549d"],["/post/f201f9fd.html","c8f8bbbb9bfe4a4dded0bc6b1b46584b"],["/post/f79e4123.html","b5b47f12a34e5245e99141ee6d852969"],["/post/f8648a1d.html","b6ffaeb5e2639ec95d1f2c97436841a4"],["/post/f89cb603.html","bd9468d1ee830d808c97c6a2fb1745a8"],["/post/fa288682.html","c08b24be3c1ae608637cff2c200dc348"],["/post/fb98053e.html","f8fd60541c8a1d94804b08baa92b0d52"],["/sw-register.js","98c95446721bbf8fd5b80d4a489750ee"],["/tags/AT-T/index.html","fda6c71c6b3e0f19ee180caab728eef1"],["/tags/index.html","d0859e3424c32b6f6e308665d0ef0dd1"],["/tags/动态规划/index.html","7b27ea4a0e9c7e54d59c5628d4c10a50"],["/tags/字符串/index.html","73c37339e42a079e08ebdcb366757b6c"],["/tags/字符常量/index.html","24eb8ce9e550d169e5f4c6b2d6e74502"],["/tags/快排/index.html","ea756a1a6a683de8c0a9538222ac9a2e"],["/tags/排序/index.html","e096514557f6b9f77e1526d013617151"]];
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
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.bootcdn.net"});





/* eslint-enable */
