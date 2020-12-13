/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","0a902180fc3e23894dd8ff9d46d4c597"],["/archives/2019/index.html","d16228e446245394245e40e0cbe64d33"],["/archives/2020/01/index.html","67c92d0903260ac606798d0d53856d72"],["/archives/2020/01/page/2/index.html","9355cddde2b46257a9abce06e16f3176"],["/archives/2020/01/page/3/index.html","9155c5832e20fa8c836217fb3f8e7aee"],["/archives/2020/01/page/4/index.html","ef957f84b168980260cb74a61067dc88"],["/archives/2020/01/page/5/index.html","09bf4ba9d5885d8ffc63a9da78680d68"],["/archives/2020/01/page/6/index.html","3bb58d14d02138e7e57b9d129e15c912"],["/archives/2020/02/index.html","6882cb3fff0d6532eff27ecb17699808"],["/archives/2020/02/page/2/index.html","1435a0f11725dc0e7d53d60323dc07f3"],["/archives/2020/02/page/3/index.html","896e8aba0d249ba84ee02243bf8058d6"],["/archives/2020/03/index.html","f200bc8ace2dfed23150ba1da607061d"],["/archives/2020/03/page/2/index.html","ce9a8852b469d4cafff2f15924d7099e"],["/archives/2020/04/index.html","6678287a079b9f25dc0ff2b2234838d9"],["/archives/2020/04/page/2/index.html","502c8c55893c2ff139b6015fe2b22546"],["/archives/2020/05/index.html","8d41dde4c7a533fdf0c0dd539ab386d0"],["/archives/2020/05/page/2/index.html","8c5dad0574da099673aa898cbe94388f"],["/archives/2020/06/index.html","98a96e521e2617062147cd4c54a7108e"],["/archives/2020/07/index.html","8418accbc36cc49dfa44301497597b5c"],["/archives/2020/07/page/2/index.html","919ad820069dec5c9bd9a35451f21817"],["/archives/2020/08/index.html","13192fa3850a36aac9b8b860ddfaccd7"],["/archives/2020/10/index.html","cdac1aff550319c49dcd5a3ea149bf1e"],["/archives/2020/11/index.html","915c1069f84b399d86dddf8dbc0796b4"],["/archives/2020/12/index.html","5a90e53b747a659999d33101afb9a476"],["/archives/2020/index.html","d9895d63bac16abb06d4999566994a95"],["/archives/2020/page/10/index.html","d165f18b8f5c841f020a9296e17da763"],["/archives/2020/page/11/index.html","28eadc689e0d03384f51e5eb25c35210"],["/archives/2020/page/12/index.html","9c37a4816c23b5dd373172224e5867d1"],["/archives/2020/page/13/index.html","729841ceae7d42361b6f95ef1ae843fb"],["/archives/2020/page/14/index.html","0e21713c75fec874804788a309472f9c"],["/archives/2020/page/15/index.html","0622b0f739e1a5f61b2ccc08a7c74f15"],["/archives/2020/page/16/index.html","6bb86be41031d0823db95d4e371d8f10"],["/archives/2020/page/2/index.html","94a1151eebd658c2436e44cf9fdc707f"],["/archives/2020/page/3/index.html","51ac6d30038ce45c319c2aad75d8c622"],["/archives/2020/page/4/index.html","e70dd3da2ec2f7998ef09e4e344a50a0"],["/archives/2020/page/5/index.html","649f61096771b12ea4ad57a06993956a"],["/archives/2020/page/6/index.html","98c3031d190df4dadde1381a89aee986"],["/archives/2020/page/7/index.html","a86c5b7df5bd34ad6d908d3a92959775"],["/archives/2020/page/8/index.html","c8a7a560e394bc084ab7b51937c1dcc3"],["/archives/2020/page/9/index.html","cee24ec704e8cbf80379afce7ab4e0fd"],["/archives/index.html","9eb50e14dfd85ffd6ba706a28ec4229f"],["/archives/page/10/index.html","12ec8f66b769287a26dfaee580bdeee0"],["/archives/page/11/index.html","62f0cb65c419355d8d21adeb3663b516"],["/archives/page/12/index.html","ad331a32d8c42084664ef4449e237cbd"],["/archives/page/13/index.html","a3866fda4d6db748c00e28f5ba354a45"],["/archives/page/14/index.html","51eda8285ac2e5fcee20de0eae6b3d16"],["/archives/page/15/index.html","c4dea6f18371858705b5f61df7ad06d2"],["/archives/page/16/index.html","7b4d528b3a61d4f5a2551ed79e1acf1d"],["/archives/page/2/index.html","53b6d76e7c433bfd9102ebc80afb44ad"],["/archives/page/3/index.html","61c426039a39c9c2d13648da67c923fa"],["/archives/page/4/index.html","5082531662eb4d3f1825881d0d7debf3"],["/archives/page/5/index.html","2db30ee2fe8b6ba7c72501280bbb9f4e"],["/archives/page/6/index.html","d4d019337d70338a595a576d2f1d301e"],["/archives/page/7/index.html","1acaa8518e9f093dd3d87d7ea7dcec23"],["/archives/page/8/index.html","41340f8e68e0f1371cac21433f654843"],["/archives/page/9/index.html","2c5afe2331e9b2dd76da6d26259b657b"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","dda5b487da67c3859d3246da5adb7fe4"],["/categories/Linux/page/2/index.html","cb7822d275246997dee117cc95dd02db"],["/categories/Python/index.html","679bd1617eeda04e14d92ca667aa5105"],["/categories/c/index.html","b694c35c42a5113ca5973edcfacd9ae6"],["/categories/index.html","78f31a4045bad3ca0b1167978b5f2814"],["/categories/java/index.html","babd118a13acaed9770d6a78bd80917d"],["/categories/java/page/2/index.html","95ff8d6fa899e49f466a9494d88d9bf2"],["/categories/java/page/3/index.html","e65fd8baa95094919a00c2279548d00c"],["/categories/next/index.html","df00468ef3fc16aa2f0b81d4a3007aba"],["/categories/stl/index.html","07081a4680fba53f2ea308c84d556867"],["/categories/windows/index.html","394b738db8af30cced340bc2d167abc1"],["/categories/基础/c/index.html","92a6680e3d8b84fd855c82c6756fbba9"],["/categories/基础/index.html","d710e7ea3e51313e970c4617557dda7d"],["/categories/基础/page/2/index.html","51e330ff9f993d446d2d3af40fbed62e"],["/categories/数学/index.html","bb9ba59e626a7f3365a397fbc5fa1cd4"],["/categories/数学/概率论/index.html","ac266ef1078c854338e2f73c564d7d3d"],["/categories/数据结构/index.html","0a692897b0f37d4cb04b3b994c7e30da"],["/categories/数据结构/算法/index.html","3a7c5cc5d489a4ce82117d45e3dab48e"],["/categories/机器学习/index.html","798e363fe58879925cb07880584bbb75"],["/categories/汇编/AT-T/index.html","6cee71e7fe2367ee2d3b0d3b62e6fa65"],["/categories/汇编/index.html","1e55c2615d41f0b722c34831729646f0"],["/categories/汇编/page/2/index.html","32f4d310302330d32f61c883dac96c97"],["/categories/汇编/page/3/index.html","ce96b12eeb0f7a7df7fb985c71c5f885"],["/categories/算法/index.html","a8bab40be3ad4bf2637b397ee169d66e"],["/categories/算法/page/2/index.html","ab92d857c5f871edf230fbdcb8e15aa8"],["/categories/计算机系统基础/index.html","5f54595101d8cce4f9557040e1dc423e"],["/css/background.css","39b1b22e2903e556913dc52516e1e7de"],["/css/index.css","81540c084fb756b1a9f1bb2b6a0e134b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","e55833b1c8c8669ea87ca73f844e5c6e"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","c639bd4fe0a3f3a3fdebea125f4b2700"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","c87919c3295a47b12e1a57426aa64181"],["/page/11/index.html","c7a985fd18ae53712cc6f35172c49bf2"],["/page/12/index.html","ef9dbf66ccc7bf8ce6ffaad66eee1116"],["/page/13/index.html","22864b33beae9aafe3cae812bbff467b"],["/page/14/index.html","091a8c34d7bb57a5394dc9ac94ec1964"],["/page/15/index.html","4ffa95f511ea395985ebe9e52f15864f"],["/page/16/index.html","ae9191d3fdc5746e62a49669e8a741da"],["/page/2/index.html","7bd8358453167972bf3b22684ad08614"],["/page/3/index.html","dc8d34e4e40244b8740a51d086e61d0b"],["/page/4/index.html","1c0ee55632815b11bc9cd0cd65189955"],["/page/5/index.html","0534751ae234fd368676db7cd7f2c9c7"],["/page/6/index.html","8b1e7c78ca0297f4b9716f0a05ee6f20"],["/page/7/index.html","465b2871805c291b2ac9e934534b1a25"],["/page/8/index.html","063c23710b7b67914198423c3a121b62"],["/page/9/index.html","c4807aa395c98e538d12a125ba798c45"],["/post/10919.html","f6e85d71040be93284eca3fa25d767ba"],["/post/11051.html","920ef8dcdf8b2ef3c297b036524992ad"],["/post/11306.html","b80f0c4be10a31a9d605b3178916d276"],["/post/11491.html","73f09f9a2a027f1f4d85a533391b3cb8"],["/post/11799.html","bc64da04d7c7381e7978d67c08bad80d"],["/post/12334.html","0263191c5d7caadbe8180768736e44fd"],["/post/1326.html","495ffebb275f4ab13e804b78f3465e83"],["/post/14379.html","72a309820b4f82b7f0ece19a4b59b83a"],["/post/14511.html","0e4147fa8eae57c378f52d81d78dc339"],["/post/15201.html","7399b29a428c1442ee84cbe1c6b1e6ab"],["/post/15425.html","8e4ea968cb8dac098adf395bd6238b1a"],["/post/16107.html","dcc2dc98c8c15b5c482b4bcaa8f4f9b5"],["/post/17862176.html","84b69bcffabf7cee01fcfa9896d3e51e"],["/post/18431.html","b54891f205fb4375530eb886f69db18b"],["/post/18912.html","1ec27f039f0d294125ff263376a649e3"],["/post/1b9c8662.html","dadf87715d1fa5ee6cd611bbb44b85aa"],["/post/20198.html","b1aa6ea380e93019f47370c03e629433"],["/post/20ff5ccb.html","8ff48806d71aa5fffbfc5a4b7603dc6e"],["/post/21624.html","0bb4db948a2d92a43a9d8cc45b83a52b"],["/post/2170659a.html","1b45d282cb47552c3b814f4e38996412"],["/post/22102.html","2c3038caa9f2b32411efa249e070c7e9"],["/post/22493.html","8557815a82698a1b6a1c5777db695fc9"],["/post/235252ea.html","c0ec7d118a5cf96c8ceb2620cae23e26"],["/post/25699.html","6914fcbaf9fdea066d4deb17c4853d94"],["/post/2647.html","a72e673e2e8bf0c1ae7e6b627d767aff"],["/post/26477.html","7830c4de50c3dcb27d2511bd2123bba5"],["/post/26671.html","0475d2509d4009083c7d93cded80e0dc"],["/post/26737.html","5179ca700de1d5bf8ee875f101b90323"],["/post/27045.html","2830cba87b60e1779000e9a28dc1c30b"],["/post/27621.html","951ce1d306fe5b20ff26ed931b3f743c"],["/post/27890.html","60d9fef040121ccc9fefa4472ee7e098"],["/post/27980.html","f8a4463751ed18c326d87b02baafcb27"],["/post/280b588e.html","7c90db7850280b45dc52bd753b82bf1f"],["/post/28579.html","d3077498cd4ef848d11f74ee4c1bab79"],["/post/28877bf.html","6f70a7fc3df2599ddb100ec0f446cbe7"],["/post/28954.html","f036acb0b5503f6153badc76637af732"],["/post/29378.html","51293e8a7430d49ae24124d482a485d4"],["/post/29949.html","ecb766a09abc63e66ce21ce058adecb5"],["/post/2ae43b86.html","31ed2b9e48df19f3411c2c2b6535066e"],["/post/2ba82a45.html","be1696ea9125c4dd40046345c390136d"],["/post/30072.html","75e677e93232f887e7322744cb76cdd2"],["/post/30479.html","b9dc514812db33d596681adda561ea7e"],["/post/31a6b40.html","89d68168c3918af6cb289e206edf568f"],["/post/325cdbf2.html","3c41610ec45828b0c6684177830e27db"],["/post/3319ed9a.html","738ac2fb7121fd1d1796e28e80791038"],["/post/3320.html","a58178e1a9fd8c34a5442474df61f9ee"],["/post/33cb1151.html","ceb471975746b0af256a1caa407b72af"],["/post/348d4e04.html","f8d41e0eec0ef095b6af7891c10db892"],["/post/3526.html","b97fe260cdcff0e576cebb900865f76f"],["/post/35532.html","033cb7a2eff24d0f61526ed717ffe2ed"],["/post/35848.html","6a3a845eb23f006839f66a596f7ce5a9"],["/post/37318.html","aa63a78213b7b2f47d69f423a732199d"],["/post/37663.html","8a3c52e56ee7ce2df48fd760501c33d5"],["/post/38035.html","1bbd158083486410f1dea8cd6e516dc6"],["/post/38072.html","6855303a577bc69d7489bf78c71806e1"],["/post/38145.html","02d9c266cfd2365f6da6707ac3aa81ee"],["/post/39968.html","4059d215b1188123440b8409cac9bcc3"],["/post/3de4bc69.html","21bf7496d869cf87db8e954bfc9cdfc5"],["/post/40583.html","1753c6b3f9a430e4812d66b24fb5d298"],["/post/40997091.html","558e338d4dcac1dccc004ba560277abf"],["/post/41129.html","692313a35ce3ea5ab811da8b9f1f28ed"],["/post/41763.html","aee0661804fa28dcbb2a90f15496e560"],["/post/41829.html","24e26bf6431c0330dc37f095bfbbdead"],["/post/41840.html","703483171c2c84d153e44b0d107735df"],["/post/43817.html","7b4706a88490f89d086453a5842b7495"],["/post/43878.html","f2020b74f62edb2c2f75f01ed562897e"],["/post/44250.html","e52d02336265c38c43d7ffbf5d39e76c"],["/post/44336.html","02b8c74756bd16b1dbedbd08e9e443cc"],["/post/44454.html","dc29835363631909ea652592351f70ab"],["/post/44487.html","583d462a6e7f00878dab3d01c66e26b6"],["/post/44914.html","c679a6ad1335c2dedb9be5c64eef345d"],["/post/4551c130.html","20f3f72168f8d97bf71e8916375b5888"],["/post/455a4c92.html","43226e6f8da34be217e8f7ecd24eb8ed"],["/post/46466.html","43c4f05aac0ba6a600b2965fcd463a61"],["/post/46925.html","900e7ebcdde2e3615c25925d47f10581"],["/post/47075.html","f6f2b1de6303dcb9dbd4ba8026b6fb87"],["/post/48220.html","28434b3c237a351411ca52833b86cbab"],["/post/4b1879e3.html","212ffdc9d2488e4b9bfdfbceb6f5ba74"],["/post/4c720881.html","be29699990a1178104c46dadfe4e27dd"],["/post/50daec4.html","72f1579fe6b749e3421274ad69d1e5c5"],["/post/51491.html","88fa78eee1f6e27287b231f7c1b546df"],["/post/51e63dcf.html","84d51a6b23a2005fef1e43a08815e50b"],["/post/52078.html","2625261e4e7a79084968a05a373403e9"],["/post/53677394.html","5196e771c5a18e07e0f455231cd052cb"],["/post/54300.html","eb86a82152006eeee8bed68cef5e8c86"],["/post/54612.html","3edbc80e4aae715682239f5940dc35f9"],["/post/54613.html","401c6910763dff066d13b7b5748cb055"],["/post/54708.html","916b40cf872cf257eac3029d8949f117"],["/post/54778.html","6c4753fe37f60899f350e8a1f04bf99f"],["/post/5490.html","da7406c2c2f03e46faafbca5be2fe648"],["/post/55046.html","d4413a7e44592dfbe46b6d4c9b365c50"],["/post/56929.html","0210f5587f7a12cc5a13296e6338b37a"],["/post/57339.html","aabc32582791293369fb7a643a46e987"],["/post/57449.html","b1e3dd74b8888e843da78d75fa4abeed"],["/post/57453.html","6efda8fc362f658b2abca1d2b7e9dd6c"],["/post/57671.html","134a086cea8035da1977030db35846a6"],["/post/58313.html","4cbc81ce31ae0ae08291eeac828633fa"],["/post/58481.html","534f032d4b725bca734110a96afc0345"],["/post/58986.html","23a28a1fb36eaa41185fda50145530c9"],["/post/59431.html","92a7b2105194888b906906f66de16563"],["/post/5951da65.html","750f89794d78ed384db58a1e8ac13128"],["/post/5be7e977.html","4083d166c1cb75426e24552f26f3d490"],["/post/5f9e4eff.html","486cff2a42d81bff1b2a3b735a89a610"],["/post/604b49d0.html","ea7127497806cd75bc805e8292c5a449"],["/post/61312.html","be7b4149821a232579f92624b4d71423"],["/post/61738.html","3df378cb34919c8b437dbc950bc01a8b"],["/post/61809.html","7074ae5967da577aec943b9e5c78bf49"],["/post/61eaf19a.html","df5e9b8e99bfaab9c7fa8bad8ed018e2"],["/post/63002.html","af9a2cc4b2ca2fc9620c0163fa287b7f"],["/post/63711.html","6b485ccdaf7a24a6b5c23a0aace41139"],["/post/6587.html","b9e51fe16949180a2d70e07b137bca67"],["/post/6589.html","e6f231abf049ebac0f6257c8086153a1"],["/post/6880.html","1aef56662bdf31e6e42497e177df994c"],["/post/70263071.html","1a0bbc646f0901c82ad560ff56dad496"],["/post/71038564.html","8dafb86661d8e1ac5d1de0c3244bcdc9"],["/post/7119.html","67ca329762f792313b105dc58b83c5a4"],["/post/74e7fdff.html","4d45535873020f8e9bb8ae1a921e607e"],["/post/7502.html","2e1670e8af999df415f07793598ae8d6"],["/post/7564.html","2f0447fa5954bf18ea4c7061d46da3c8"],["/post/766f9b60.html","3950d31d5bd2fc48a86e80a2a4c50e52"],["/post/7ca31f7.html","eeb0a4ed1e419f661e3ee5b27115e6da"],["/post/7d1c86da.html","8e9a66a23d042142a7530e3b175a6d5c"],["/post/7f3bcd7f.html","439cd50ef7ce880a722a119051ce720c"],["/post/8039.html","4fe350dad7fafbd96504de69a9ad6bd8"],["/post/8050.html","20440cd04f1d0ee00bba50c6b9999a0d"],["/post/8072.html","9d9266ee37b2876331a0b9f38c5fd721"],["/post/8274.html","fe7c2277714dc548266a1cea4c1af109"],["/post/8372.html","065a9f6d35962e69d09fb6c307e543a5"],["/post/8498.html","8c39670b743a240b70b1430f4e985c25"],["/post/85b4e13b.html","76b0512ec5ae2cfcee8a49dba9a26ae1"],["/post/912b2566.html","1d901bf2d9328deb96004198de051ba1"],["/post/9187.html","211c74d2cfbf3d4d7b51b7cc163bcdce"],["/post/9197.html","209c87b89d5e715ec53e9e6db7e62005"],["/post/94ceb2fd.html","35f44cb4dc009fb20a9e3898997e03c1"],["/post/95495db.html","37abb435b0dd88769d93068f9893c331"],["/post/97246020.html","ee531d562188a69dcc9b0293776995f7"],["/post/a3a786d6.html","2d6c800b7fc29f3a6f4541ea86ae0704"],["/post/a444b428.html","d3a6ec7c0566501a0609abb0891b15ec"],["/post/a50b8908.html","547f8cc9f59c3a18a114889458ec2b52"],["/post/aa1eade8.html","13a4be485a662149857518d870b63ff4"],["/post/ade8c6d6.html","25336802b9c80c055b5084cfe0fbb331"],["/post/ae8362df.html","0df2c1925a7124b538e4586f69ca8e7a"],["/post/b4c1d206.html","4acb5e83edfd51d9d08d50c6f309e906"],["/post/d431fab4.html","f2ab39f5dab3000d9df2798418384e7d"],["/post/d5381517.html","acb0f6753e657785f799b6823748be10"],["/post/e058ffd8.html","402338532ba0a9f507149df5abb592a2"],["/post/e0f8cb74.html","39c7ceb5043959e00dbc517f9296119a"],["/post/eefe591f.html","cc461c4cda90992b37eebf29727f57d7"],["/post/ef296a07.html","e2b251c773916b070bb22aa49a0700b3"],["/post/f201f9fd.html","4da0bee79e8b4c601bba00113f27818c"],["/post/f79e4123.html","34ce3dcf0880230dbe876043a3cad303"],["/post/f8648a1d.html","60937555e2c41d88476bd9b070bf86c8"],["/post/f89cb603.html","d409759f29422d55ec314372a54d6184"],["/post/fa288682.html","5c8aaa5c8367ede7accf3de5e421ed09"],["/sw-register.js","027a6151567aa115d816e7a4e236e121"],["/tags/AT-T/index.html","83277eb160d93deb391d0d547ab54160"],["/tags/index.html","7ddc356dcc3235b43099561be6293c9e"],["/tags/动态规划/index.html","48e8ea401f450bef32b0970665878dd7"],["/tags/字符串/index.html","b245a79a92ae8c78efc7fcb977fa6fe7"],["/tags/字符常量/index.html","313cdff9b607b640d94aacb365e2d398"],["/tags/快排/index.html","d7a0d440edef636044cb63a3e82fa2ec"],["/tags/排序/index.html","a8d58ba8df1d6053d9159a2ea63bf340"]];
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
