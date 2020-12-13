/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","1266b2fbb9c22bfe53bb95c380e56f2b"],["/archives/2019/index.html","bffe7a766f36c0a43db47b90e26d4237"],["/archives/2020/01/index.html","cf1c94f006df1fd0160e9699a08c7318"],["/archives/2020/01/page/2/index.html","df5fc321d2e9e91ed3ea0e326da6cd5a"],["/archives/2020/01/page/3/index.html","ee917ab503dd53b3d8187d1a20f02b28"],["/archives/2020/01/page/4/index.html","ab161591a9d554b0e632800037dbba4e"],["/archives/2020/01/page/5/index.html","8d94cdfaab09695aab0bbee60e567f37"],["/archives/2020/01/page/6/index.html","dba600aef12fea04db890950cddf197c"],["/archives/2020/02/index.html","8a620b068511dc8637bcf6fa6ca57cdd"],["/archives/2020/02/page/2/index.html","9f773df5d5ed9e6f61e76829f6ff00be"],["/archives/2020/02/page/3/index.html","a27a80c12931b14116cc4f10e73b456f"],["/archives/2020/03/index.html","706e7ccfe8811b0e110c6fa252423696"],["/archives/2020/03/page/2/index.html","38022bb44ed94e717ba72ebab2389568"],["/archives/2020/04/index.html","011c5e104fbe47b972a52ef6ba2786d9"],["/archives/2020/04/page/2/index.html","e608996033cfd5a253d527493d8bcb3b"],["/archives/2020/05/index.html","b61d1604cae57cb47c03e2bbd7799072"],["/archives/2020/05/page/2/index.html","ef6a7741c2d30798593c1a0a51f17fcd"],["/archives/2020/06/index.html","1a91bf2d606f38192a1a16fe4cc7744a"],["/archives/2020/07/index.html","bb8a78fa1d857622d11c9407d1ff6d9c"],["/archives/2020/07/page/2/index.html","65bf9fe29283926cf42d38913fa0314a"],["/archives/2020/08/index.html","8daff78c8c9eccff63043e3f745feb6a"],["/archives/2020/10/index.html","6759b7b6bb5fcf89db2a4fc2cf533f09"],["/archives/2020/11/index.html","3d7bba85b25fbf46f3b9e1388aa1f9f7"],["/archives/2020/12/index.html","2d924dcd9b061f10dcb73de173e81bbe"],["/archives/2020/index.html","d8d59bef6ff13de6969494d845d7985a"],["/archives/2020/page/10/index.html","3745d1443837fd8a51e7171de09ea598"],["/archives/2020/page/11/index.html","4342df71fe563396866569c7751293af"],["/archives/2020/page/12/index.html","df65892a7ab4bca921208f3d529716a1"],["/archives/2020/page/13/index.html","e6cf792155c382df1fecc960a243a013"],["/archives/2020/page/14/index.html","26398750d9ec2a987139f06f25fc4f50"],["/archives/2020/page/15/index.html","bafc3aee0961be4d6efb19b731249ce0"],["/archives/2020/page/16/index.html","c0454f63742f142cbac14b8444d4c29e"],["/archives/2020/page/2/index.html","a14e52a8028f00b72b0e74e2c8a6c355"],["/archives/2020/page/3/index.html","7c68dac2ed8c4e0af9b1ca50e450c395"],["/archives/2020/page/4/index.html","32c822a440bce785c529fa0895e7f705"],["/archives/2020/page/5/index.html","8a5248137ef0a70f1626368fdb1488cc"],["/archives/2020/page/6/index.html","055554335d3e703fc3da4b2cdabcb7dd"],["/archives/2020/page/7/index.html","869b4231d5bd3f4244c7f5fa15c0bf80"],["/archives/2020/page/8/index.html","8f4c05c15515bfb836f4ce6225b48613"],["/archives/2020/page/9/index.html","1dd2d046be48ea3e62918b4329bc7d62"],["/archives/index.html","0d260573aa8d74798a17227a10444318"],["/archives/page/10/index.html","6d2af36b2148926e0b6813335734786d"],["/archives/page/11/index.html","8f58ab4c739f6872770bc84a488dd8de"],["/archives/page/12/index.html","49b2fdf148bed5ded52386e8d8246f22"],["/archives/page/13/index.html","35b0b74a7ff128853d46dcafed43ba8e"],["/archives/page/14/index.html","d02f2952ab1afa212b780b9486185397"],["/archives/page/15/index.html","05f9cccef898adbd5eb7f6aed644cf59"],["/archives/page/16/index.html","4451b8a2db8cb96ef44045e0396f87a8"],["/archives/page/2/index.html","d975b48e6266e2db4383f0a03ca6ba5e"],["/archives/page/3/index.html","a5998cc97b410ea3594c207a6868a743"],["/archives/page/4/index.html","eb4e18ec543f554df6a2d997857f4704"],["/archives/page/5/index.html","eda10ebd3f6e0a7191a7c632ea3110d5"],["/archives/page/6/index.html","efa9b58557c5bd05d41a79e8b8e4c51c"],["/archives/page/7/index.html","1b9a2d9d1cd453680ac2929d3c40d4b1"],["/archives/page/8/index.html","1e0f2b4426eb837fd07370d2357539bc"],["/archives/page/9/index.html","85d7fd1841308f19b07e9b00d645b871"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","34911f52f3c400b8f3ca94c6188ad26e"],["/categories/Linux/page/2/index.html","82ad7a8a9a90fa204fba9ec9500b966a"],["/categories/Python/index.html","51da86465cbff4c6a4c3c2d44bb9b989"],["/categories/c/index.html","31c864b5ebda4543a43b29af58f88f99"],["/categories/index.html","4bca1696c121861a9c813dbe69302a71"],["/categories/java/index.html","2d53f176a2717ced2617277621534605"],["/categories/java/page/2/index.html","77dd52d4be5a229ee2bc8fd262e463ff"],["/categories/java/page/3/index.html","999042b2e55d3c6c701b07d4b1d61d3b"],["/categories/next/index.html","028295628e476c70238bffd9d3b54596"],["/categories/stl/index.html","4844bae133505b69fb892543236d4747"],["/categories/windows/index.html","13c4e623af0fc91aab39f636c91cc81c"],["/categories/基础/c/index.html","c47c26b35746fd90bddb9d14e39243f0"],["/categories/基础/index.html","354723cf91c3262328bb70546b05b416"],["/categories/基础/page/2/index.html","236e99474f13d2eb1dc981194e28e873"],["/categories/数学/index.html","8d8cdfcdeab408ef84809e7727c2a466"],["/categories/数学/概率论/index.html","2097e915d55635690b87cdbb9bb1cb93"],["/categories/数据结构/index.html","1565b4c22fcab2690878dab384868ffb"],["/categories/数据结构/算法/index.html","b3937ca9574391532e08626ac14c26d4"],["/categories/机器学习/index.html","8090f040e28075e20e96a52840f003a1"],["/categories/汇编/AT-T/index.html","1438a8ed43af7b90369ab765caad3bc5"],["/categories/汇编/index.html","ddd32ba41b18d369926cb0258278d607"],["/categories/汇编/page/2/index.html","f1e3d3fd0dbdc1cee7b7dc6814dfd77d"],["/categories/汇编/page/3/index.html","539ed643b651f12990c4e6e6c27522cb"],["/categories/算法/index.html","942f7a153b3f93fc7293449dd9a3cd03"],["/categories/算法/page/2/index.html","c2a7ac738110c1012018ad6278632552"],["/categories/算法/page/3/index.html","c8f8cdd9fa992d5570cb3041117fc4f9"],["/categories/计算机系统基础/index.html","3a0f973d299ed68da4f0b21881dd3719"],["/css/background.css","39b1b22e2903e556913dc52516e1e7de"],["/css/index.css","81540c084fb756b1a9f1bb2b6a0e134b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","135fad176896eb300facfc2880c2bc28"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","c639bd4fe0a3f3a3fdebea125f4b2700"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","76a3329f05c321c6428256f5c7289956"],["/page/11/index.html","168b0f0f0649a53de6e8ac57632d1dd0"],["/page/12/index.html","14139c86d5638eaaab437caf6fcc4c4e"],["/page/13/index.html","7d88a248a1d744fad4da6dd868fdc276"],["/page/14/index.html","dcefdca34a67cec87c635d4bff742403"],["/page/15/index.html","abaae76ac2fb3f47111781f6bd796c2f"],["/page/16/index.html","0b6e8c3563dbd9363542016b6ddf0faf"],["/page/2/index.html","3303407a0cefd378c2b69050454b55d0"],["/page/3/index.html","b07d0a5344450578c67aedc9d992acfe"],["/page/4/index.html","17f488dd442c4c5da675d4f2b581c7d4"],["/page/5/index.html","080d0cc1e1d4c5f99bcc351988f3c616"],["/page/6/index.html","3cdddeff60c8ddca8f538a2c5580e204"],["/page/7/index.html","44953f0127b40a0585fbe6ba66a8ecda"],["/page/8/index.html","299f15008c4742748e13052627e33789"],["/page/9/index.html","a5b2aff28fa98ccf75039012916e27a0"],["/post/10919.html","f1243cbb569bf9ba95943c85668f753f"],["/post/11051.html","d8c95c8615e381136b0c7361943e91de"],["/post/11306.html","295e35ca42e8206dd80cb47ffd1d80a4"],["/post/11491.html","fe71fbea61ff9e6646360f78f2513f79"],["/post/11799.html","d2721cf88a6e8f860f89e79c55490f96"],["/post/12334.html","55db57118754f1f868ddc294b7bf77df"],["/post/1326.html","f1f6c4e1c1d85469d7d7426d32ead5f2"],["/post/14379.html","3ee3d00d0e7f6b1be0cbd0b0065cb0bd"],["/post/14511.html","4cc29e9a0e179e9b7e411f690ff5f90a"],["/post/15201.html","e2584bc2f8086135d3573b01ecf7750f"],["/post/15425.html","0b1389fdd6689ab7c8dcb7cc396aba8a"],["/post/16107.html","b5b61ed52cd6ba5e68ca341cc61df801"],["/post/17862176.html","c178cf88313f467cb481f2e7c0833982"],["/post/18431.html","a780ad51d0781d7c8cfdaecc29ea0714"],["/post/18912.html","3f04d8fa7f9ad0ad6afca879cada13aa"],["/post/1b9c8662.html","cc50b01bc405c71e1e1b0fdee2717d9f"],["/post/20198.html","7eeff8f5a0fff218352d8002fa9810d6"],["/post/20ff5ccb.html","72d9d6ce1e5ed94d212f284acd0dfe4b"],["/post/21624.html","ffc4d1cf646c1115cca6b55762bf6ce9"],["/post/2170659a.html","3b335c66ae31509ded1c64e0f22ab71d"],["/post/22102.html","5fc52cac56336765e3371f6b330c11cc"],["/post/22493.html","3e7b4ced7a026004afb0eeed74208178"],["/post/235252ea.html","f6b6bdd151e77c6b75647fc4c2d49bf6"],["/post/25699.html","5de18af0b357af9a9a561683dac7910e"],["/post/2647.html","96df3e309e819bb8bf00c3af8bf970b2"],["/post/26477.html","8cd9e0b3329222402fc12c274a8ea22c"],["/post/26671.html","b3e8a7bd7598660e1c78171a13b645b2"],["/post/26737.html","5cd9642904238f6434a811a613c9e4ff"],["/post/27045.html","630b55254d4d4042a14808f5763d6f5b"],["/post/27621.html","ca64e507549dc147fd42c3d943881a0f"],["/post/27890.html","dd53f74e133de887239e36ec3318f980"],["/post/27980.html","7a974b70aee5d642499b8a79be4880a6"],["/post/280b588e.html","cc99ab17367d31e416e0bd5e646e4ae1"],["/post/28579.html","af2931df87abec5608f61dd0f2fbd774"],["/post/28877bf.html","b2924eddf4c939fee92d00833a485ec0"],["/post/28954.html","d0fa0885ede538fa252a0e6809b8f441"],["/post/29378.html","20ed378c9da72dc0c35aac45f2583a45"],["/post/29949.html","361e6f5bf840ff9b88ba3c9ded87a3bd"],["/post/2ae43b86.html","2e603047d393acbcdb77c0ec136031ef"],["/post/2ba82a45.html","b860025843f9f54780a824a72d274f12"],["/post/30072.html","3c4cc7615e548d393f7d5a3fff0ee603"],["/post/30479.html","2b4719348acc912f87b61adcb007b382"],["/post/31a6b40.html","bc94d1a36cd8b0fd2007c0e6cebe9951"],["/post/325cdbf2.html","437490ec1d4a29872ff1661b5fdd5ca4"],["/post/3319ed9a.html","f5ef1b3e818bdd137827944e6c02be12"],["/post/3320.html","d5ad4c0a2a9eb0dc1805daf30480b8f0"],["/post/33cb1151.html","86c09d2de4a34097f6d1a75c9144bf14"],["/post/34811d5f.html","1e9aa6d6110ce00a99e45edbd77276c3"],["/post/348d4e04.html","26db489eebfbff7cc3df2ee38bbaaec1"],["/post/3526.html","284bd276675e3d0444dd3add14989478"],["/post/35532.html","70e438ddb8fa2802d31d6a98ed3d38b8"],["/post/35848.html","c5250c8611a333c6728b009fd65e854f"],["/post/37318.html","86a11998c7df0f0fb4f7c4c25d0d10f1"],["/post/37663.html","529b72351fccaf108f3650edc16ad625"],["/post/38035.html","8129c4719d7c3d0b98948bc7d09f208c"],["/post/38072.html","4cd960086ac357b2ba025cfdde6056e4"],["/post/38145.html","1ac18b2640140aca237c09d8018f69e1"],["/post/39968.html","6367556420ddfabc4326c8d73abecd6d"],["/post/3de4bc69.html","cb99f5f887e18954e4a879a5722521c3"],["/post/40583.html","2414ee72e56160615df7ec844c38f582"],["/post/40997091.html","2242a2ee3630377af66f7a886bc074b2"],["/post/41129.html","a1df7cd46d5a2da259caa5be75ccb278"],["/post/41763.html","5811fb18a88c21754089061dcbee39c6"],["/post/41829.html","185f780d99b01613e717fcc19809fb3f"],["/post/41840.html","f57c9a180dc28340024d9ab633af4954"],["/post/43817.html","efbb3734cc305bd8a238013353639df7"],["/post/43878.html","e22fbdc759ae6ba24be1ee141731fddd"],["/post/44250.html","a1d7c71ddad358eef9f11d29b57b4609"],["/post/44336.html","1b2e8bd4bc264908a6bddc24055e71a1"],["/post/44454.html","95c7b12d0f32164a6f067ea10bae4b5c"],["/post/44487.html","ef9bcc641edbb2d9b78479fd3e3765ac"],["/post/44914.html","2e18614cd8f8666bf7f80a56031039bd"],["/post/4551c130.html","18dc01ed5e1158462788e4f433227207"],["/post/455a4c92.html","66d8b1abf25c723b9d9c657dbdf35a1a"],["/post/46466.html","51d6a1f6776ae2d42d0e5bd265992958"],["/post/46925.html","dfa3d10d93da5f64a32bc06e3f91dd9d"],["/post/47075.html","6c833c5ade184461966dc2e53835bd96"],["/post/48220.html","930a472cc5bf4e74f943e22f1e29d696"],["/post/4b1879e3.html","7eee9d002858502f4f2231d26f76669c"],["/post/4c720881.html","8916e749b5d9ad835698370ac452b6bb"],["/post/50daec4.html","36aec21e423ee6c3afda327f025b9d37"],["/post/51491.html","edf0e43ededb02d1c0007334726d9aa3"],["/post/51e63dcf.html","65271cb6d04492572465a65df550c92b"],["/post/52078.html","052f1bde7fbfa20dfc815562e4b5f167"],["/post/53677394.html","2599b206dbe3b57ac6fbe4e273bfbade"],["/post/54300.html","06de8cb8265e435e0d6627264102ec14"],["/post/54612.html","a2d5b3b2da00fcbd48aedeba6206f7b4"],["/post/54613.html","6b40d068c873425e753427f450245220"],["/post/54708.html","6b62afc7b84fcc59d8b2bae6317b59f6"],["/post/54778.html","8e5e2e0662f4b9c5e030deb6494ad148"],["/post/5490.html","0b5d3261cce2f0399bc49fbb0963d8d3"],["/post/55046.html","fc0a539da2e5a07ad4cb94f81e587057"],["/post/56929.html","5debc233ac05690f0aa75689c961aa0a"],["/post/57339.html","77bc635fa96ad1417b8c1d9263306c92"],["/post/57449.html","9cf83de79836021dffd2e2002ff060bd"],["/post/57453.html","b817b82c89a4d1929b98c8ec7bcdadee"],["/post/57671.html","51c34b0dc829cccf983716e783f95843"],["/post/58313.html","b88e5f2b60cc44783537a8d92cca5fd2"],["/post/58481.html","207f9a791f2e86d22aa93c09b9e8df2b"],["/post/58986.html","19917b162e4d517bf0366e8d11d176af"],["/post/59431.html","52aa1eae867b711cbb6fd1412ea8dd95"],["/post/5951da65.html","4fcdce20fe66f63d21de2eaf782362d5"],["/post/5be7e977.html","18d7690975fd581a6bfe987c38256a60"],["/post/5f9e4eff.html","c60c5c46ec31f7a236f42d7f43c97d77"],["/post/604b49d0.html","b369055f374b62c2674481679e581738"],["/post/61312.html","aa253ee68f91ab57cd17676f960ad338"],["/post/61738.html","d57f7b64e400eee04604fac056277d1c"],["/post/61809.html","b6a48a5f3ef8da8a621ee5f7499ff664"],["/post/61eaf19a.html","89d335d9a6b48a776ba18244a18a8a19"],["/post/63002.html","44033de815ccbbb4d4f76761e7efee1b"],["/post/63711.html","b0d0b202613a3a92dd84e010f3d27da1"],["/post/6587.html","3ebc0e723235c20c0046f07980681cd0"],["/post/6589.html","7cb917461d731b329492afce9e55216a"],["/post/6880.html","7e0ecad1506cb7e2ce7cdbb20a105764"],["/post/70263071.html","8250832c5aa4753cfff7b1d75f7f5f12"],["/post/71038564.html","e7d92719a61fbd0c43e1be618ce8b407"],["/post/7119.html","c735bfa784c684da87522abb73f55b63"],["/post/74e7fdff.html","da44dbbe3b3920bbc021079b3cfef736"],["/post/7502.html","df0cf76504253cb23ee7552afe97cf4f"],["/post/7564.html","cc95e8f6dc1b83fe1506ef80b49b138f"],["/post/766f9b60.html","81480a15cd8d8f1d6601c7df1312b95d"],["/post/7ca31f7.html","350545cde3d5d8e4a96b2c91ae088f43"],["/post/7d1c86da.html","7a362f5d6cf13984d1bc21af0193e1e9"],["/post/7f3bcd7f.html","5a310bcc9e7bf5ec5fe1b6c125101bb6"],["/post/8039.html","ed9117d18676724b831734b06372dd78"],["/post/8050.html","773df567fe2787fd15dab5b27a6703a4"],["/post/8072.html","e7023ec3438a9640c7cf6e2d3fa16037"],["/post/8274.html","6f624483e1d725e2a1d230cb414780ef"],["/post/8372.html","58ecac2a219b836c814ab3c15455cf41"],["/post/8498.html","8d49c8f73b861cb88bd0d03df509ed5d"],["/post/85b4e13b.html","0d11eb8b369ebdd3f2b9289ef98014ca"],["/post/912b2566.html","30959f90ed048d4c3145b47be997906a"],["/post/9187.html","6740c747e59ffeb84a5cd2ed9cb8e509"],["/post/9197.html","0bbf446b74eb43479988701f960a3f73"],["/post/94ceb2fd.html","15885ec112fe7620b0cc6ec53873d949"],["/post/95495db.html","50965d7753f0f9e09c3ffe74a891a9f6"],["/post/97246020.html","3611c4a2b9360082c2be67b79d6c107a"],["/post/a3a786d6.html","952eb33f1e12fdba3c25ba1a6596eccd"],["/post/a444b428.html","f88a6452c8539b0ee8392e3dea98a816"],["/post/a50b8908.html","88dd8ac4b2b60e0a08e64a8d4d38afd6"],["/post/aa1eade8.html","e3bd35f38d5ba9d2588a1aa64ed9af9e"],["/post/ade8c6d6.html","20ce9d49446956fd98cac5a035021a38"],["/post/ae8362df.html","07d7c30c2c82c5482291d786bfe46dda"],["/post/b4c1d206.html","f3cfe34c7ff9de14c015b6f40c554294"],["/post/d431fab4.html","747e936818ea05f83af6a7afc8efac5c"],["/post/d5381517.html","e12a807910e730ea70e9e76fbcc580b6"],["/post/e058ffd8.html","e36d30818e1c61f34f387cff9be97cf9"],["/post/e0f8cb74.html","3674e7a7a8ffb8b7205bfc6cfb3c37a7"],["/post/eefe591f.html","842074ab66408c27673c4f6c76a502bb"],["/post/ef296a07.html","ca9f9b000365e56d96ef755cb94f2826"],["/post/f201f9fd.html","d6c51bd94b820ee32cd18df6ed2b08c5"],["/post/f79e4123.html","c3ae3d3af9490c1a4d84095c9c9d7aaa"],["/post/f8648a1d.html","2afc4c1b65e9041a709d9ea29042626f"],["/post/f89cb603.html","1d6ea43a8b721cdea808af3cf45f9908"],["/post/fa288682.html","de6c20c302382df6265d3630170bc550"],["/sw-register.js","581232595a244916a98a9aab673224c8"],["/tags/AT-T/index.html","3c2865f02a2f6a9ccceaec009d827774"],["/tags/index.html","48616a04277a24fdf7118ae28b6cda13"],["/tags/动态规划/index.html","85b5cf76d199fc56bb824a603268ec03"],["/tags/字符串/index.html","b7afb8b4fe4e029564285744e435d934"],["/tags/字符常量/index.html","7ddf20db5d0197a0f0599608e3f51df5"],["/tags/快排/index.html","b7b1af4ca2068bb46fe85fa9d20ae4ce"],["/tags/排序/index.html","e6b2f9ad1297c8dc67a8b12946982b64"]];
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
