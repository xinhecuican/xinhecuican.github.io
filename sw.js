/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","291f00b8ccc1eb8c4c103daebb4f8913"],["/archives/2019/index.html","7d1eda521e547143a46aea6c1da21e21"],["/archives/2020/01/index.html","d26b390c37cd89f71d8044f59b2d49d5"],["/archives/2020/01/page/2/index.html","0bd972526b826cdbc6589b1408ebd3c8"],["/archives/2020/01/page/3/index.html","a97f8f9f61feb750cdb449fd07f2b31b"],["/archives/2020/01/page/4/index.html","15f8af2787f488e93079f51dfe48a530"],["/archives/2020/01/page/5/index.html","cb073fb66b71d7e80e367e28fa668bb7"],["/archives/2020/01/page/6/index.html","6d4d2e8905b490808377f93f916ac47a"],["/archives/2020/02/index.html","d50560707c6ddc2b177264bae6221c31"],["/archives/2020/02/page/2/index.html","162cc5778254d7d2258ff53cf237d8b7"],["/archives/2020/02/page/3/index.html","2c50677c06926f7ac752863cf9453321"],["/archives/2020/03/index.html","36e967c72c1a45a8eee6abbb6bad0d7a"],["/archives/2020/03/page/2/index.html","782b71f3138a34aa390e6aecd2f0dca5"],["/archives/2020/04/index.html","38f38a67f2a093450c04fc6c1f9f6a6c"],["/archives/2020/04/page/2/index.html","012ffc2d591d6278532969b00e70fe2e"],["/archives/2020/05/index.html","ec2545804a126f61b86c6dc6ddfda673"],["/archives/2020/05/page/2/index.html","26815a0c60621c64b2771047f4f60577"],["/archives/2020/06/index.html","ff28a5e20b18508073183c320966589a"],["/archives/2020/07/index.html","be18debfd04317c60d29c597776797f6"],["/archives/2020/07/page/2/index.html","d4187933b5a62d2057fe4d5ff455e64d"],["/archives/2020/08/index.html","fb3c5481bb4e8bf7d08cf5ee536543e6"],["/archives/2020/10/index.html","41971a519f40b2c61dd9b42775b26d82"],["/archives/2020/11/index.html","c1c4d04a1c194c0912d90a5596d34ef1"],["/archives/2020/12/index.html","c151b1c97a8510dc87228ee6e20fc838"],["/archives/2020/index.html","e0a0af7d955920ea24d1069489866f7e"],["/archives/2020/page/10/index.html","f368bfdf5967557330e67d57d7c6472f"],["/archives/2020/page/11/index.html","4083dcc7f3e415a47f19efd431825e89"],["/archives/2020/page/12/index.html","3b8f4d81a20727bf78881200ae9e1cc2"],["/archives/2020/page/13/index.html","7171b8addd8dba37d158f92506224bcc"],["/archives/2020/page/14/index.html","d9f5a4a0c04c963153d874f5b0f2a3de"],["/archives/2020/page/15/index.html","ccf50f9b8b165290083b2b85ab4dd10e"],["/archives/2020/page/16/index.html","e3c8760b4733d967468ee51fa61c855c"],["/archives/2020/page/2/index.html","138b781fa5973f26bbbd1ebf28f0fad4"],["/archives/2020/page/3/index.html","a166b0bb3eddf4ade0f96d5f2dd44264"],["/archives/2020/page/4/index.html","b5bc4ca0d999d3d39adb3101cea2ee0d"],["/archives/2020/page/5/index.html","270ee99779e047eb2b5ef877e6f7a894"],["/archives/2020/page/6/index.html","08b326f6f716a963dce5ee8ffdfa6f6c"],["/archives/2020/page/7/index.html","84c640b98f123d545c40d360fa54d561"],["/archives/2020/page/8/index.html","901f676f180b00905c444e3284332ef1"],["/archives/2020/page/9/index.html","75499466ebdbfe8349f1ed56f1ec17dd"],["/archives/2021/01/index.html","fcf92e72526f7c6f4081900780deb7a8"],["/archives/2021/02/index.html","a998513252c656a46b38f18914e84178"],["/archives/2021/index.html","12ddcbfae10b415ab0b8dd289e5eb361"],["/archives/index.html","aa99a643bf4d39b548921fc0583ba068"],["/archives/page/10/index.html","43f1afc8a96ceb22078d724d21c2e881"],["/archives/page/11/index.html","5e28e76cb722e1eff5bf72fc1409d9f4"],["/archives/page/12/index.html","57541c9d75e3dfd323c570e7003f9b4e"],["/archives/page/13/index.html","e3baaa4d9391c370e9ba6b188cb86d44"],["/archives/page/14/index.html","bb6c1d256ecdd1ed980f85a21be2beba"],["/archives/page/15/index.html","93819d9183b644725aeab88560520d50"],["/archives/page/16/index.html","ee703d2d325c6485220a88beb70fe156"],["/archives/page/17/index.html","8d036c6e7f16939fd61e0d1277946166"],["/archives/page/2/index.html","a4260bcebf794e75b5a618a86443b497"],["/archives/page/3/index.html","0d55cd4fcbe6a139f3a6603d50485ace"],["/archives/page/4/index.html","719782823e7deb0f4fc3aedee84755ab"],["/archives/page/5/index.html","99758d86f920b88bbac94a978d700462"],["/archives/page/6/index.html","458813b6049f23039d39245d4fbebf51"],["/archives/page/7/index.html","5ad0163c6895271dddc52ab31c1d1474"],["/archives/page/8/index.html","0971eabc398ca91ac6069b4713bbeaac"],["/archives/page/9/index.html","276a9ee6cd6c9dc5aa227d69d06722dd"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","46ac0c19631c99607bf39785049797e2"],["/categories/Linux/page/2/index.html","cdcd0bbf9fab20f5bd9691a79e42d7d8"],["/categories/MySQL/index.html","45fdaf49b8505e9ce649480f2b6a616d"],["/categories/Python/index.html","b5c9a1f6f59882fe878944e9c414b6d5"],["/categories/c/index.html","7ec746416ed156a223899993e10b6d7b"],["/categories/index.html","e56b235ccc59b74534970e4237e876f6"],["/categories/java/index.html","99cb01795da92db873c20413c89f4043"],["/categories/java/page/2/index.html","4650a5f98e6688d71aa4112f60bcdc08"],["/categories/java/page/3/index.html","cc699616833b3b531e1c7792c5c2a3ef"],["/categories/next/index.html","c45a816f3136ac6fd5e4fc157c95a5f9"],["/categories/stl/index.html","914dbde1f9f381fa58f0331c8e3ee0df"],["/categories/windows/index.html","1e89d1d250897a6538a8d120f89546db"],["/categories/基础/c/index.html","f0dcd1a792dbd9cdabeb0103da18eb25"],["/categories/基础/index.html","e16a2c2392c2838421992fa9910adc56"],["/categories/基础/page/2/index.html","43f54ffcc229189ae6b594134e56e4de"],["/categories/数学/index.html","7c7f481f05f7d77a5b04f8d9e65c4861"],["/categories/数学/概率论/index.html","b4db25e338c3b7108fc9f6b5a7872ac8"],["/categories/数据结构/index.html","dfdc357aa920d1dfa1dc930abf2eac39"],["/categories/数据结构/算法/index.html","bbc2a582c517043802722cdaafecf20b"],["/categories/机器学习/index.html","1df2f47bd2f267d14c08559d8d26d601"],["/categories/杂项/index.html","2527f163fdb1125e2735059b8af705a5"],["/categories/汇编/AT-T/index.html","71ca88002bc3b790d9cfc1d5e2e52483"],["/categories/汇编/index.html","8c4f9a0a24d944fc1cbbfa4f3e86144d"],["/categories/汇编/page/2/index.html","dc860840917a4970095238f8acd43bfe"],["/categories/汇编/page/3/index.html","29ff1ecfc8b65234c5a4822eddcb9cfe"],["/categories/算法/index.html","bb46dce24ba99a90e626595bb40a1b63"],["/categories/算法/page/2/index.html","2cfa7c476a57448069c8e6ab3ee2a4e9"],["/categories/算法/page/3/index.html","443fdb412241a89158bd9d2f4c3c3eaf"],["/categories/网络/index.html","1048f91240fa800e7444de7de7aa41e6"],["/categories/计算机系统基础/index.html","9f43fc79d690cf8b134ada0f07cbae0a"],["/categories/计算机系统基础/page/2/index.html","49df816cf98d79beccb9b099a3d5d7bc"],["/categories/逆向/index.html","b41027a3566d81088ce306f24be76d14"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","99d2e05805dce9ae2f36041643c299bc"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/HTTP1.jpg","30e1bea7769f2cec34130f180904cf65"],["/images/PE文件1.jpg","9f673b828bd69f07e1a3c646ecd4367c"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/字符串匹配2.png","a2178ecdbd4061940f57c5ad7a3d3a29"],["/images/字符串匹配3.jpg","62ad48f6df4067ac8ba78fae289aec41"],["/images/应用层与HTTP协议3.jpg","9f8dd77e70aa4f6ceb5f6ff52999486c"],["/images/应用层与HTTP协议4.jpg","2d79dee035b8a557b74c312cb88790b7"],["/images/应用层与HTTP协议5.gif","a669d1cf7e5033dd80ff8544273c0f1d"],["/images/应用层与HTTP协议6.jpg","b7dc39f7cc8f5e8fce7625aaf9639726"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/引用层与HTTP协议2.png","87559bf7ba74bffe37c156d4ac8173ec"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/网络层1.jpg","1d4233d4673b7f420ad697652807a1c4"],["/images/网络层2.png","43ea2f9a0123b16603fda74fe7a129e8"],["/images/网络层3.jpg","cc17d38c80d7e7d2b330af541458d8c4"],["/images/网络层5.jpg","fefce8be7f2ebbac1c7972af1c14edad"],["/images/网络层6.jpg","bed91d30f37c2febf4fd09c2d4b8b2cb"],["/images/网络层7.jpg","4bce5f4cba4e1703e36b6d12fd649574"],["/images/网络层8.jpg","84ba3d5cd61aea680cf20fa55d0cdedd"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/运输层.jpg","5b0a17debdd2b880203ee18d4779c5ad"],["/images/运输层3.jpg","b9a70cc24bc81ccf9f94770936a7dd50"],["/images/运输层4.jpg","67b41ea674abb2d6d422639593c0acbd"],["/images/运输层5.jpg","570ddaa64331a62f84e97fd6dc96d15a"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","ccd3f4dc7e1a0ce62fd3f8dd76fded08"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","030bbfa678aaa703a2370ef7acc559c1"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/page/10/index.html","16276ac6265be0791b5cf92278283d01"],["/page/11/index.html","0c84b83319806df0657e5aced29179b4"],["/page/12/index.html","7274d2d118dfc6d9371372ddad22a8f5"],["/page/13/index.html","e1d8501eec499a87f5a429bc6e63301e"],["/page/14/index.html","571a04ff1759fd5fdf1c1d80fb43f7a0"],["/page/15/index.html","92dc453465a1162572164487895095f7"],["/page/16/index.html","30425da7f210e62c2c0d652255d73ccd"],["/page/17/index.html","1c8e3f73143823cd55e8d42a7d190cfa"],["/page/2/index.html","19e4c4ed01b81639b7994e36ca5c5102"],["/page/3/index.html","981baac6509e4e1790445a1420921c41"],["/page/4/index.html","6cb92069b8121ec90175f318f96e8194"],["/page/5/index.html","bf3f45c65c79d4779a299446a19e8444"],["/page/6/index.html","18307ed548b00c3c10302e1c69f9a7ed"],["/page/7/index.html","744ea08ffed54a8aea582556b3e26a14"],["/page/8/index.html","c0789b1f1757325a1d71c982af0be355"],["/page/9/index.html","326873b417c73b4bc077366971768a0c"],["/post/10919.html","79e02ea79a6c358c940899295cb65069"],["/post/11051.html","ac4c409b92eeaffedfacb31ffe404e5b"],["/post/11306.html","9d02171c8f808536b3704a427bf505ab"],["/post/11491.html","4088cbba84f18b5e421ebaa44fcf66ff"],["/post/11799.html","85aac06d698e9f085db1b7dcf00725b9"],["/post/12334.html","2eef1b469a8aca0381cbc86e23547e12"],["/post/1326.html","9d7b3eed8efad00288b1ef66f0d9072c"],["/post/14379.html","3825156b960607559b2defcce65adcef"],["/post/14511.html","8115da8c2271132619f6c32072d2c4c1"],["/post/15201.html","1f6961eee8db196de24e2a6add33b90c"],["/post/15425.html","21031316da8624e37cd414901e458273"],["/post/16107.html","82dc4895e776b121809a3bfd7a085ff9"],["/post/16e2846c.html","1fb73ac6e00f275ad0434339209bad15"],["/post/17862176.html","5026b6cd0edd3e28a3dfdc2d238a6fee"],["/post/18431.html","022740c51eae761aee6ac5787f81f06c"],["/post/18912.html","f2965e0c98acbedf2aa5e67ea7c43867"],["/post/1b9c8662.html","3910d1e4779373f3b1a9e43816de1675"],["/post/20198.html","bf2d941ce085b18f3ee3ff6ce0729c16"],["/post/20ff5ccb.html","7562495399bbf8c762e3ba9c6b0e7ecc"],["/post/21624.html","a9f3c953d0075e2bb8aa87b4bd67a4ff"],["/post/2170659a.html","324efc160aeb84fc4c06c63291145769"],["/post/22102.html","569b52dda6fdd683be84b44049ffbdf1"],["/post/22493.html","0f40de1782cc73a8cea12ab9e46922e2"],["/post/235252ea.html","8bbde14af3a2a541784b7590f7fdec6e"],["/post/25699.html","72bbf7dee6f7707599de9523ea05cd2f"],["/post/2647.html","9ae5fd5f1c4be16144ad7d8136df9ddf"],["/post/26477.html","13f8bec6aa771c446470d9bd3c3a5317"],["/post/26671.html","3b2758674a51357a196481babd1dfa82"],["/post/26737.html","ff9a00f7c75633ffdc93b89e30c02694"],["/post/27045.html","31de1b5469fddf1a7bef701dbf582226"],["/post/27621.html","b67c0ef22b523c297ce5c5aa2d4b83c7"],["/post/27890.html","0f730388cc68a51fdf664a3b2f5373e8"],["/post/27980.html","e29fe75a131614fd4e13d1cf95cba1e7"],["/post/280b588e.html","4e5ccb65e03f613f354951c8cb890bba"],["/post/28579.html","d9195696cd4a24d91821b30d4d3be079"],["/post/28877bf.html","9e81c5fc17dda88b20a441c1ce79c8a0"],["/post/28954.html","fe3c4c29165c7dfef916538f8dded6de"],["/post/29378.html","0cc980d9be825fd45fd72fe53d2a3e21"],["/post/29949.html","d42089071edee03ea335ceff5a8d673c"],["/post/2ae43b86.html","b495d08cd3b384c37401c5cd13a8026c"],["/post/2ba82a45.html","f90cfdf077e9c210787d6638ab458f86"],["/post/2cad8b04.html","4e4c4df8e35482f3ecdb352b98d5b587"],["/post/30072.html","42730e99c9b7104ac5dd5325829368ab"],["/post/30479.html","5a41c3efcc02b4db7293eed2da139af3"],["/post/31a6b40.html","dba2f8c21cbba6ab998c6b3e67a1153d"],["/post/325cdbf2.html","463a6d1466973f172f4c9fd81588dc33"],["/post/3319ed9a.html","7518f8072562606818965c785bcec1f5"],["/post/3320.html","ea5b6b4b889a443d4238cd5eaacc4678"],["/post/33cb1151.html","13d2a21be88a22aeba94a82bd6f5ce4a"],["/post/34811d5f.html","147584b96334d6c0d1a43ae63440453c"],["/post/348d4e04.html","c30c1903c828fedeb208c2b52f3f1b81"],["/post/3526.html","402d54f8bbef0d224aebccb0335c04cc"],["/post/35532.html","bde03b04acca032d0575daf3b2c0486a"],["/post/35848.html","c0cd21240eb3cfdebbff07b1e1d1f0d2"],["/post/37318.html","fa47173e8806b0fca636dc80c2de5b3f"],["/post/37663.html","221a728f5c48434160e847dee38c1104"],["/post/38035.html","e7c26a2a65b7243407e7035de66189c0"],["/post/38072.html","84ac6278a11227ab0913e697c9250ef9"],["/post/38145.html","e814d58ceb211e230c467054a0b00923"],["/post/39968.html","1d8cfba6070946d139208a9dff78d1e4"],["/post/3de4bc69.html","a373cc03effe47010cee1f9a9eeb3d90"],["/post/40583.html","88f1c44cce394c0330729ef67a8cb043"],["/post/40997091.html","8bac60b6089d196de9f5d612c08a40c0"],["/post/41129.html","d2027ac3b7688c5d9378bbe097f98694"],["/post/41763.html","5f904d1cbda6f56b0f60827281b67972"],["/post/41829.html","10cb556b0ae1dbeb58606d0223511052"],["/post/41840.html","e907f7fca1d5e718235490ac35f13459"],["/post/41e39f2b.html","7fa91c7ae6a3a6f1afed1f485a747417"],["/post/43817.html","211f77ccd856d36d3551fb5ae3d24cde"],["/post/43878.html","5606f6adddb6cea242ed97eb54e5adde"],["/post/44250.html","3704a57aa161cad0f1dfda4612dcadf6"],["/post/44336.html","2e9118b5b8006f19030ca1c72cbda112"],["/post/44454.html","272e44ff84bab16b4b5ca3d2849c2f20"],["/post/44487.html","f27e21f32e9fb45fc4fc4a8d00a765e0"],["/post/44914.html","a1c61e93746eb46133b6a4e5231cf345"],["/post/4551c130.html","7b00ab9e3d677994211786b9c81d59d4"],["/post/455a4c92.html","d11825dda305248e2e0ddcf2a432d3ff"],["/post/46466.html","379da256d918a043d1a0158a7d7f62c2"],["/post/46925.html","ce27945e1da91d881ec3e36eabc67edf"],["/post/47075.html","0a3a6a797a15ba0faa55fe5cf08631ce"],["/post/48220.html","65ccc58e8d8f792a45f85d9ebbf1043e"],["/post/4b1879e3.html","14a7c5ee885eca8f2783cfaa2278b60f"],["/post/4c720881.html","e1349dea328c932cf0243244098dcf29"],["/post/50daec4.html","50322411c8fad460149b914ac630f725"],["/post/51491.html","68b2b33681476bdcc49c0bc58a8581fe"],["/post/51e63dcf.html","e2dd0152c00186ac25529c1edaac11dd"],["/post/52078.html","b76054cbe7242f183f09b038f86e0c30"],["/post/53677394.html","dca23bb8011c82d7c7b399e97e7172c7"],["/post/54300.html","bd95640480852943bd56cdd068115134"],["/post/54612.html","a9f3a8a1ed58be2e82d34128924e21ea"],["/post/54613.html","0e04d6dac47a4d7db42dbbe0b85d7a3c"],["/post/54708.html","aec87e7dd92cc35b61baf430370aabdd"],["/post/54778.html","2fe61fe333ce4e447f2f9a72df81a984"],["/post/5490.html","91470831c612de292c82a56be24f3b30"],["/post/55046.html","856d71b8ac72fcac2cdbcfafbf3e767a"],["/post/56929.html","45d9b2474a739c4f0c1a1b828161eaab"],["/post/57339.html","7f281545ff5e6acf466af3de5155f807"],["/post/57449.html","d543b5cf9ae39d127a6fb1ad4dea3cef"],["/post/57453.html","cda14dc67b18bcffef7520aea0cef7a0"],["/post/57671.html","e515fb90b2a245c1fb3b1caf27d93b2f"],["/post/58313.html","5d4fca8964421056f0e836a754fbe61c"],["/post/58481.html","9aab0542b1f0753f5a62598e8eac1970"],["/post/58986.html","860c604e916b969dbd691f511f2a5e71"],["/post/59431.html","5d039b0d9ee790a5d868fdc9e2269e39"],["/post/5951da65.html","e038c486b1c1fabc906853bf0bbf14a3"],["/post/5be7e977.html","3ac069fa3d413290c927d554608d6991"],["/post/5f9e4eff.html","a2dac67b1e8d311f5f75d7a5bad6f096"],["/post/604b49d0.html","ebe2401f98381661eb582f8ea79e72e0"],["/post/61312.html","30d690a075fe99722dcd0e9b76a158d9"],["/post/61738.html","ba25893b9cd110c1479a822a0aef3876"],["/post/61809.html","3ccc06fc589001ce7cb6478817ac39d9"],["/post/61eaf19a.html","e19bba72e2951a3facd5c376aa235150"],["/post/63002.html","ce743d571e1bcab799680d1e8b84b203"],["/post/63711.html","be53131306bd717471f1df38756ae113"],["/post/6587.html","4e2c0910641eaef6c224a0be563a753c"],["/post/6589.html","0f28adac859f98d67ff30ebc86f6525f"],["/post/67454659.html","f759b59a887f233f2c7bdee2666792be"],["/post/6880.html","778590d8649ad6b691ecd78b1ebd7acb"],["/post/70263071.html","4900ee70d37b47db35c25577640d6cc6"],["/post/71038564.html","6afb05db14482e4c1be5de6ff2a48915"],["/post/7119.html","90a79e2b4f8e8640fa785250c411842f"],["/post/74e7fdff.html","2f10398c5e31e540f806417740294952"],["/post/7502.html","a1b88dcc39c4656d02287365579a8da0"],["/post/7564.html","61b5b07b470f64bdde22b19dcc130b42"],["/post/766f9b60.html","99b41490a8df457d0e96356bc6bbac35"],["/post/769365ef.html","9ee84227ca341c48a3bd7079b232215e"],["/post/7ca31f7.html","92ae0ef82173616275a9261173a798c2"],["/post/7d1c86da.html","65782ab928afa5e02851466d654bee4c"],["/post/7f3bcd7f.html","806997f6ba9e208da33a07e538413d73"],["/post/8039.html","6e9fc70c9a213d838fd49248b99edfbe"],["/post/8050.html","7c842f258c0dc9b2a6fb6f0e28bfb821"],["/post/8072.html","6b2ecabf94ca9ecb5b2c86ac6d11e210"],["/post/8274.html","89f37102f3f5c74a06e2064e1688cf91"],["/post/8372.html","228d3283ac29cf5612fe2afebce54032"],["/post/8498.html","40abc8a1135a3b588791e261abfbb62a"],["/post/85b4e13b.html","f30bb66f34a1f4c1ab3af2ec392b6285"],["/post/912b2566.html","4e7dee464b085405255b1f2b429d15b4"],["/post/9187.html","348f02b51cfeba19e519e7e96641edc7"],["/post/9197.html","2ba93f2028a516876b01fd3d906a5f40"],["/post/94ceb2fd.html","3230368bd49008cadd9f27799ee0a5b1"],["/post/95495db.html","475c43732a3eeeb1b67d7f9bc63b1827"],["/post/97246020.html","0c7b278bc791204f36001bfa74bb4ed1"],["/post/9954ba8e.html","22fb787beae6a562aa34a753fb957e8f"],["/post/9d855db5.html","e281930574c1a07e9ba1a931e58446a8"],["/post/a3a786d6.html","8e4164de50a427171990ea8cc9a80433"],["/post/a444b428.html","98977a8d2ac367ed0fa1cb2ab27d57cc"],["/post/a50b8908.html","9a33302a56617726f91aeff667f0710a"],["/post/aa1eade8.html","c0206af6268cca76f8cacc252ff6c246"],["/post/ade8c6d6.html","335e758bdf0a6161de7677363046ff17"],["/post/ae8362df.html","2327423a5bfa72b7d54a675e547f9b35"],["/post/af3eed3c.html","86553818df1044bbe8ad7cbaa966a8f8"],["/post/b4c1d206.html","09222f691fd49ee23835461bae05946b"],["/post/bd608ff7.html","07e156872536c0f10499f81fd19b9807"],["/post/c82a1c99.html","80f77ea5a63c47c9f1cc098fc3883733"],["/post/d213fc7f.html","b271ea46450e1035829b245287bcf323"],["/post/d431fab4.html","56891e28eb909050222ff22cb50d399c"],["/post/d5381517.html","de2fe16ccf28f88e36fefc6ca7fd3a57"],["/post/d94f88de.html","7537d8f3dad3397c49518e6b5b03a5fa"],["/post/e058ffd8.html","346b13839d7fd43069f3306c55bf537f"],["/post/e0f8cb74.html","b0bdb4d72ea1f5874dda4809e514afe6"],["/post/eefe591f.html","8bc22667d77b333444557124a55214a7"],["/post/ef296a07.html","d061c4775d2ee8cb056388e06cdce39e"],["/post/ef3a3fcc.html","457c3cbad4ea29a4e628aece8d477e1b"],["/post/f201f9fd.html","4b4d9bd9a39600f8668e721a3836aa09"],["/post/f79e4123.html","5a1f92bc4deedf674b8d59f1e60b2935"],["/post/f8648a1d.html","2cbaebfd1c4bb9ef4b026950c2bb9732"],["/post/f89cb603.html","40428c8fccc8474e1b1b54230c99610e"],["/post/fa288682.html","f31e9f1c98f76401a55b7405cb4c978c"],["/post/fb98053e.html","66dcde94aebbb263cd4a4602bb260d0f"],["/sw-register.js","3d51b60e2fad44275fccdfafc91022f6"],["/tags/AT-T/index.html","933e827b5abeb7c422768a4d55e09646"],["/tags/index.html","c4e7f580890e2aecf4f7a153f257a057"],["/tags/动态规划/index.html","4d9441bbde6f699dbe319537d7c504e9"],["/tags/字符串/index.html","d06d82f18ed6e561207753ad0fdb30a9"],["/tags/字符常量/index.html","19b38be640ef4be671a949fd350977d8"],["/tags/快排/index.html","9bd1a84f080b780a57b00b11bab0040b"],["/tags/排序/index.html","87a2c2d14a4a4efcc9f1352195ad9456"]];
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
