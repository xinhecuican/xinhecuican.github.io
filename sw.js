/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","36d7f952faf8c0264a4eba83d2923860"],["/archives/2019/index.html","a8f741b3c5f0494a5b19bc57a9d579f4"],["/archives/2020/01/index.html","e9dbc4599ba11e450bb96874ff8da503"],["/archives/2020/01/page/2/index.html","a5210cc1ea971a4a2913e05eb7f55e52"],["/archives/2020/01/page/3/index.html","f0c0968e2328ba14645625b3f60634d0"],["/archives/2020/01/page/4/index.html","4a78508482c4c7861f5ee9016abdfe81"],["/archives/2020/01/page/5/index.html","096c4749fb396ed255ee9d86c71e5e00"],["/archives/2020/01/page/6/index.html","5f37c9fbf37ccccf9e571f1a27afd29e"],["/archives/2020/02/index.html","b3fca34f0ed4b2a7448211b06d574522"],["/archives/2020/02/page/2/index.html","cd994025066b2f9989d1cd23621b44eb"],["/archives/2020/02/page/3/index.html","7b15b399b955cb402595ec259ea43ec6"],["/archives/2020/03/index.html","56d7906f875577080bf958cd033f670b"],["/archives/2020/03/page/2/index.html","48843d1f234de4b1e16ac716d22c4448"],["/archives/2020/04/index.html","105bc9490cc19c54abd327f752c5ef23"],["/archives/2020/04/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2020/05/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2020/05/page/2/index.html","dca31e8472eb1fc81a819d354ac74c5b"],["/archives/2020/06/index.html","9ca6a33c55c5055865db51b94bdfe880"],["/archives/2020/07/index.html","07226b41b156df52f97b51e346604c63"],["/archives/2020/07/page/2/index.html","98197d56d2308309d91e471ce4966c0d"],["/archives/2020/08/index.html","d76be24316fc00c6279b66c7647a6669"],["/archives/2020/10/index.html","f6a5c9e65ef38bfa9cfb74a1f5f4d1b1"],["/archives/2020/11/index.html","61dcb57f1a39dab63374b3116b0b6be2"],["/archives/2020/12/index.html","820f5ab818096006958dde294672fda7"],["/archives/2020/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2020/page/10/index.html","03f41ba0e93dc433d2b3946fec9328fe"],["/archives/2020/page/11/index.html","16e0e260f3f9269ac0c7c1cd5ba6aa16"],["/archives/2020/page/12/index.html","c32271680eae8c88afb19cee387997e0"],["/archives/2020/page/13/index.html","49da80c316ddb00d65d8ba662080b734"],["/archives/2020/page/14/index.html","5b94ebc3a6cba6f83b07ef100a80fd48"],["/archives/2020/page/15/index.html","49fa15294a154b65286aebb4bcd1be63"],["/archives/2020/page/16/index.html","c78847f1f10b1a0244e9b8a2e2c943dc"],["/archives/2020/page/2/index.html","076bb97dc0a25461a47fe05e66fb42b6"],["/archives/2020/page/3/index.html","faca8429b0729b600e90549809946445"],["/archives/2020/page/4/index.html","616586c2b60ead2ab69348621bee0a59"],["/archives/2020/page/5/index.html","b3fef74a3a2c8d3a174e4a9a8614e407"],["/archives/2020/page/6/index.html","37f0f4399d36fda710cd3c4d1ebd22e4"],["/archives/2020/page/7/index.html","0e1f86d0bfb458d8b5ea8d2f7d8ff2e3"],["/archives/2020/page/8/index.html","8a523b162b4b4d39ccad7abbfd2b63c1"],["/archives/2020/page/9/index.html","78cd95a300e99fba17cd3469bba150d1"],["/archives/2021/01/index.html","f6070f3581588fa9760d3090e00e0df8"],["/archives/2021/02/index.html","085717e05c11fd40a07a7461319a8030"],["/archives/2021/index.html","e7e10922130478c5d949604a080523bb"],["/archives/index.html","8c4c4295e201ea4b5434859cc8191049"],["/archives/page/10/index.html","ccb67ad4cb6364e80c0858a0b1dbb541"],["/archives/page/11/index.html","504b67947244d7ce06ebbe9dfe360470"],["/archives/page/12/index.html","ca296753d7eaca175650dee77b008e89"],["/archives/page/13/index.html","7d6298e2993721a71ec0d8580f7a8b06"],["/archives/page/14/index.html","1d4fa06d57f72123a89dea977cb5662e"],["/archives/page/15/index.html","7eddc5f3ba2cdd79acc815b5a55d946e"],["/archives/page/16/index.html","54e72c7e6e31b5e736e042e5921c10eb"],["/archives/page/17/index.html","c333a57b922b2f84d85facc207269c48"],["/archives/page/2/index.html","7aac3ecb781afa94bc9fe642c68dcd4a"],["/archives/page/3/index.html","d53d8f8cc67e8be6eada172ec7a2ed61"],["/archives/page/4/index.html","241a784337bacb4c00fe662e6c90ea6c"],["/archives/page/5/index.html","0d2227903f2f64c8c7624fdd06a2f7e9"],["/archives/page/6/index.html","4cb885b14f6a531c226529df1086da5c"],["/archives/page/7/index.html","be4bf71a560d83431449023d123a1d40"],["/archives/page/8/index.html","be60fba04b7f70d26b1b0a89448cfdfe"],["/archives/page/9/index.html","33530c61f49d5672b1d22b01068138d0"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","d76cd735e6b21e4f61f16344e5f21f16"],["/categories/Linux/page/2/index.html","cf95d943d01ff25c106ae718bfe4f692"],["/categories/MySQL/index.html","97564c4f51fdcb2d367d1534ad29c4da"],["/categories/Python/index.html","55dd5c93d355c8b67aae88bfbbe95aa6"],["/categories/c/index.html","dc69e1972aa2626c9fc2e5f2abe54f46"],["/categories/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/java/index.html","0600452ddc6012acde2842d4207d58b6"],["/categories/java/page/2/index.html","f9f1a870bb589af4ace7cae75d287c54"],["/categories/java/page/3/index.html","d1e5cb5563578815669ae7f2f9bef1c6"],["/categories/next/index.html","125bd2989b4a41ee08193ef71382661b"],["/categories/stl/index.html","3224c250ea7c0ca576a0b036bf663707"],["/categories/windows/index.html","2b99c5c99b4b025fac680003ef009b52"],["/categories/基础/c/index.html","3ceb05faa398cb13823d4df75ecc6f8f"],["/categories/基础/index.html","57e6b2d7b7a1955eb5cc2db652cc265a"],["/categories/基础/page/2/index.html","9917ca89738b2a3f2391b6f6614519da"],["/categories/数学/index.html","9d0454b9672fb375018faaada96f7a12"],["/categories/数学/概率论/index.html","0490a68bd5d9bebaead63727191a62be"],["/categories/数据结构/index.html","b89e859479f8f890d507f886b7e3a0c4"],["/categories/数据结构/算法/index.html","12eae5d035b5a777b8d9f2ac0b8f282c"],["/categories/机器学习/index.html","cc4da5463a5613b330aab17bfa2bfd2f"],["/categories/杂项/index.html","863689e0caa4139443565673697ca5bd"],["/categories/汇编/AT-T/index.html","ef336de24967e7578f854cd50472504d"],["/categories/汇编/index.html","c2c7a6c22dc91cdd5b2c2946760a76c5"],["/categories/汇编/page/2/index.html","00a4f65ce2023dda5f067ca99920fa01"],["/categories/汇编/page/3/index.html","82e629bbbc33625585b6d6eacc420cb7"],["/categories/算法/index.html","1770392ca3c48088e1ba1177ea72c1d7"],["/categories/算法/page/2/index.html","b7d1f3527dd47555a7d03b16ac03ef60"],["/categories/算法/page/3/index.html","42f77e05fcbc7e0117d460e7115834f8"],["/categories/网络/index.html","e7e1344e8b0db95b9c510121c66684ef"],["/categories/计算机系统基础/index.html","221b1ed6554cd36cc81f62f360597bda"],["/categories/计算机系统基础/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/逆向/index.html","be2bb735df9c4a895e23bbe6462606c1"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/HTTP1.jpg","30e1bea7769f2cec34130f180904cf65"],["/images/PE文件1.jpg","9f673b828bd69f07e1a3c646ecd4367c"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/字符串匹配2.png","a2178ecdbd4061940f57c5ad7a3d3a29"],["/images/字符串匹配3.jpg","62ad48f6df4067ac8ba78fae289aec41"],["/images/应用层与HTTP协议3.jpg","9f8dd77e70aa4f6ceb5f6ff52999486c"],["/images/应用层与HTTP协议4.jpg","2d79dee035b8a557b74c312cb88790b7"],["/images/应用层与HTTP协议5.gif","a669d1cf7e5033dd80ff8544273c0f1d"],["/images/应用层与HTTP协议6.jpg","b7dc39f7cc8f5e8fce7625aaf9639726"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/引用层与HTTP协议2.png","87559bf7ba74bffe37c156d4ac8173ec"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/网络层1.jpg","1d4233d4673b7f420ad697652807a1c4"],["/images/网络层2.png","43ea2f9a0123b16603fda74fe7a129e8"],["/images/网络层3.jpg","cc17d38c80d7e7d2b330af541458d8c4"],["/images/网络层5.jpg","fefce8be7f2ebbac1c7972af1c14edad"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/运输层.jpg","5b0a17debdd2b880203ee18d4779c5ad"],["/images/运输层3.jpg","b9a70cc24bc81ccf9f94770936a7dd50"],["/images/运输层4.jpg","67b41ea674abb2d6d422639593c0acbd"],["/images/运输层5.jpg","570ddaa64331a62f84e97fd6dc96d15a"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","0e3093988addf058328246cdd6e91a67"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","e67cb957724a0a4621e750765386760a"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","dd653aa4c7ce2e0f9fb9cf6774483b35"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","701b6cc9ca2ba3fedeabff059da09c05"],["/page/11/index.html","25ead20f003e736c4771c1aadef47c5f"],["/page/12/index.html","cf71b5fce32ac68620edb6d2476599c2"],["/page/13/index.html","5fd1cd804bd48708e3c2ce2398375187"],["/page/14/index.html","b142984e7b1c7b42dabdc090280108bc"],["/page/15/index.html","313641a7a94272abc3a34712c0b3df53"],["/page/16/index.html","cd54725f75087d9b970a82cca692b940"],["/page/17/index.html","3cf8d8c3616b06f5e786d73d9b319397"],["/page/2/index.html","2222d7f0df7e03d4b4d727c0404c0b15"],["/page/3/index.html","52bc43259ca95985a7bf7eefa20a7c8c"],["/page/4/index.html","ed75512b78682a1a6bfb4150dd47b463"],["/page/5/index.html","d9b0036fd037450bbdaee9ad0155dfe9"],["/page/6/index.html","7b4cad343a398fc43c414ebbbf029dc8"],["/page/7/index.html","ee9a4e56eb0cad404b0f8d31d0d72557"],["/page/8/index.html","c49987d139a5cf46ada4f0392e3dbee8"],["/page/9/index.html","a27e38df9f74ade7f1f161ab349e640f"],["/post/10919.html","101b8af9922b6c667ecc9ed5441c074c"],["/post/11051.html","5660f389f1ce6b25e6d0f949ff15c312"],["/post/11306.html","d1950dd714d44d4a4da1def070c998b7"],["/post/11491.html","271e9618534a0eb0e11bda72c8ebe844"],["/post/11799.html","5160c55b84d521a8e3f7258725937ea3"],["/post/12334.html","7cf3573550dcefdcb1b2f6e8eba8129a"],["/post/1326.html","81bbe952847838a155499b67b618ca0c"],["/post/14379.html","94dee624fcf9f312c28b897310ee23b3"],["/post/14511.html","d01ec4447c3431aa23a78d50a10fe824"],["/post/15201.html","64497bac99d598cc32b4abfa306ce26e"],["/post/15425.html","a824eb940e4fca012991c7a3b7d4f98f"],["/post/16107.html","a6be4060aa675a328c471f6620cf7606"],["/post/16e2846c.html","aa9c6cd9201eb295dac2855f8edc32e7"],["/post/17862176.html","6e3008894e251bd9672b999b050be92a"],["/post/18431.html","fab5e1428820585a9891413ae12b7478"],["/post/18912.html","aed19438e24521ddd64a7ad254ec3823"],["/post/1b9c8662.html","454845ce313537c788eb88d9fa4acc19"],["/post/20198.html","43dd3c872323d679d29caac5c5411c37"],["/post/20ff5ccb.html","508c2c9b93af8096f7d7a38176ef1075"],["/post/21624.html","3d9a33152fc8e844a7f82e586c536133"],["/post/2170659a.html","6235a283eb72c8c50bd1a38db2bb08d3"],["/post/22102.html","26f1b8f05159f88da39432371b31ef87"],["/post/22493.html","58bee0172b91cbb8b37ef74472d26a7f"],["/post/235252ea.html","3b4e78d6f46cd26d682fec3257b58f4a"],["/post/25699.html","faa7741277079c909d219f6d063e9d90"],["/post/2647.html","ecda06fb99cdfa0b435a9743d04743c3"],["/post/26477.html","88e419fc1ec32a3a4540b160c83d7910"],["/post/26671.html","7b2bb0ff60639c3aeba342e23dfe44e3"],["/post/26737.html","d2904835f2ec338ebe4b0a64fdfda732"],["/post/27045.html","7ded446dce024ea407a98685be0664ac"],["/post/27621.html","27bd2d9ab7cb39bc0c459b97c673e9a9"],["/post/27890.html","be8db8fb0826648c38352cb57d034f98"],["/post/27980.html","8f814d976917237d3616cf26b834bc7d"],["/post/280b588e.html","28ded2fd9019826bde0257357450147e"],["/post/28579.html","bbf5d4438262528fe3d0266abecdc6e6"],["/post/28877bf.html","ad9e28f884fea624617e0b329cdaaf9e"],["/post/28954.html","008ce5f879ae74908104e4955c2d52ff"],["/post/29378.html","677d06ad15cdab997a42be6522b4697d"],["/post/29949.html","e27ee0c76e89de1ef319f0372e70a0f0"],["/post/2ae43b86.html","efc686ec8cd2e72b1eb56e57b5d48e6d"],["/post/2ba82a45.html","aac2cedb184d0046edc9683701408704"],["/post/2cad8b04.html","984aeb8af48ceb3f61b55eed6edfe913"],["/post/30072.html","4455d6b54c53d125423bd5fc071efff2"],["/post/30479.html","4870b379214ac50697d140e4cb4741be"],["/post/31a6b40.html","5d728b494ef0988e612f6ad8ff54434b"],["/post/325cdbf2.html","eec556e98c8479d241d54159a25cc17e"],["/post/3319ed9a.html","87c2e1c650acb0a0554dcef78901dc41"],["/post/3320.html","1a3a8f3f5e08394e0271188e64f56a74"],["/post/33cb1151.html","3e076eaf0bd2ff2e6a6b0ea68a22e7bc"],["/post/34811d5f.html","b24a18feab983728afd4748e6f3f2a47"],["/post/348d4e04.html","665717d6b790eb1c676569712f9165d9"],["/post/3526.html","ffca0dbf464bfc8025f12abc6d6dda9d"],["/post/35532.html","c9e417c00ec39ceb9d702023895545e5"],["/post/35848.html","b8dbf3ce0f34ef05ab58f00f1dc2e3d1"],["/post/37318.html","2f2436e8ed04d3034598477b6482d372"],["/post/37663.html","41f94d31012d0d8734b085930e5c6cc8"],["/post/38035.html","77ad1063e2e5b8b2d8f8b7a1fc90621a"],["/post/38072.html","0c95c464c87e4b0fbb855dfa8799cdfe"],["/post/38145.html","d07e2ccb64f7ad7abf4d1043befef478"],["/post/39968.html","748322faceab20403a51e58fe5e5621f"],["/post/3de4bc69.html","dc471795ace62e1fff99ced7697108d1"],["/post/40583.html","b2102713200cf1f6817b5d7031432d56"],["/post/40997091.html","b89e9f59f50510f56ae460fe4673ce5d"],["/post/41129.html","a518218b6232c8bd8a451c9ab904cb19"],["/post/41763.html","4279a63804f94bd44937cbaa11abf095"],["/post/41829.html","7dec83dcd54696ec125c20efe5e10ada"],["/post/41840.html","a30a7d3f102d199349a6259d36a8ae88"],["/post/41e39f2b.html","4355ff228e574345aaa0b9825a4851ae"],["/post/43817.html","cadf4c1cef5d3941fd6a27f0c8cb8743"],["/post/43878.html","2f11bb651ccda938afa9f2f67c60cb15"],["/post/44250.html","b4b7a6a261dd2a45cd09db7702d07ac6"],["/post/44336.html","3f73dac116a6e40c9adf9f03d7890c10"],["/post/44454.html","824643cfae1625771d030ae74d2e7775"],["/post/44487.html","ecfb027a22ca5aa1078a3427986634dd"],["/post/44914.html","9e3f0e34163741ed4c4b89f378e67517"],["/post/4551c130.html","022fa0ea3cdfdacf2529914c36a00600"],["/post/455a4c92.html","09a38d34f5f76e57665f72e7e9260d4f"],["/post/46466.html","0fdff6c4346d2b018136bc8a41fe3cc8"],["/post/46925.html","ff63f09a7fa0fffd9b27c47a01137846"],["/post/47075.html","35bde22a59aa33a66fe5a134d9cbeaa5"],["/post/48220.html","24f5bdb3feb22f360f6c4f5748fea4c6"],["/post/4b1879e3.html","c98f1123aaf8ff2dd8ba9823cae4f66b"],["/post/4c720881.html","4ac8330ce7d5e3680ca41e006f818cc3"],["/post/50daec4.html","957d4e1296ba52bf7b32e46c27d3c97b"],["/post/51491.html","99106b0a8734f176442b98e4a46a3214"],["/post/51e63dcf.html","796eb702a14103d816ecb512b78c7c87"],["/post/52078.html","3712aea8515338fb507f3b89cc3d57ae"],["/post/53677394.html","54ba6a23415a2580c6976a6a5f21f7ac"],["/post/54300.html","4cac5b5c130e9c891a467c0d858d87fb"],["/post/54612.html","b641f6eecbce0d2132ac91c9070b13e3"],["/post/54613.html","999f81455c764136a155a4805872047f"],["/post/54708.html","deaae5439b2868f235549f6a33d7c932"],["/post/54778.html","85985a4db7544252a080e4280896c468"],["/post/5490.html","0efb1da590815248bf0425827e3a769b"],["/post/55046.html","f19ef3a90715874f8541bc3fb80ac44e"],["/post/56929.html","b337e92572a99c0423ec92927baaa2ee"],["/post/57339.html","4a2c22ea2798bc9fd990d5a176f5f08e"],["/post/57449.html","862bba30ec23468f98fa708ec123c309"],["/post/57453.html","3fa5e607e1a74c8842f66a900ccb4f89"],["/post/57671.html","a1e30358d2a90e52f79016255fe4e78a"],["/post/58313.html","226e141563c139d66fca38e576d530a0"],["/post/58481.html","7239c27465bf9e83e1612c85b0b86fe7"],["/post/58986.html","517750c7383e07515e8a5daccacff900"],["/post/59431.html","ee162e04729a20c157921eacba6f709a"],["/post/5951da65.html","a61d2d77210480abbc13ca89d89793b3"],["/post/5be7e977.html","f583f6a68f17bcd829ca904c3994eada"],["/post/5f9e4eff.html","06d04f5413e8ccad43dcfe357f27253a"],["/post/604b49d0.html","ecc0145caba69f8ef9166aaf06deea6a"],["/post/61312.html","1fdaba7500aa2ed022842a341b9effec"],["/post/61738.html","272c038343fc516655ffde739b0ef662"],["/post/61809.html","7ed5edeecba30befbc80ac5d058a2760"],["/post/61eaf19a.html","3296c140d5a8f937e9dec8e6f1fa745c"],["/post/63002.html","bd6b969ae1d50c7271857532e562f8fb"],["/post/63711.html","d4cff032a1933fe9a90bae838b924f13"],["/post/6587.html","e919d4a73a7b6abe3189f3a292453419"],["/post/6589.html","3831d41e44176e4b428400acea375531"],["/post/67454659.html","56e1a0f3b4f5e0560ab7109e0c868770"],["/post/6880.html","8eed27449690397ba16a83dfbf4c4577"],["/post/70263071.html","539682aa992ca325452f2d72b06c63f1"],["/post/71038564.html","eb731c2c9bbe2c2572a2824623ce1f31"],["/post/7119.html","47d692380fd944e0f2cbb9027516df5a"],["/post/74e7fdff.html","a3e2966ae49b5c6e38b47b98042a740d"],["/post/7502.html","4cc28b4aa01585b6bfc721579b621c15"],["/post/7564.html","ecc209c9fbe3ca451c98643fbd042426"],["/post/766f9b60.html","fe5cd4caa87a5a129ac2a0ab3fe00e7d"],["/post/769365ef.html","aa2a65dfdc5a74785fff33f565526acd"],["/post/7ca31f7.html","029be7e7348f529e1623528141afb5a4"],["/post/7d1c86da.html","928538e613f286b53c1ea75b91275192"],["/post/7f3bcd7f.html","9c27add5d1792462496a6544c2a13ef9"],["/post/8039.html","3208fdfb57b27f883237fcb130941943"],["/post/8050.html","b69b9ad1e987c47d3ba2ed6ba084155d"],["/post/8072.html","891ea4718687db823a798dde5645f629"],["/post/8274.html","efd67889ab52ae36d5764c935af30e99"],["/post/8372.html","e93f525c1416a453a46eb565bb01ad48"],["/post/8498.html","a812e1f43c167b84ec1952f6ba07062e"],["/post/85b4e13b.html","5973ce285332d1ea0a9af07f46ed3936"],["/post/912b2566.html","95a496065df042d8472f6b0b14d034dc"],["/post/9187.html","6bb46e5d8cc743ada383e3355f67477f"],["/post/9197.html","81710d62c61dd82aeb945c15fee76a90"],["/post/94ceb2fd.html","b06e373f06a4ad453ecc9c6466b75533"],["/post/95495db.html","c36dd9577b3889e8e636285e016c2025"],["/post/97246020.html","b0db1169f253153a68b44f40ad6264d4"],["/post/9954ba8e.html","53cf3567f4df3d0a19a765eba54e1a19"],["/post/9d855db5.html","a32e7177ad535e134024d2ffb133fee2"],["/post/a3a786d6.html","f5a0090092c166e43fbf8468635a0c2a"],["/post/a444b428.html","874c0e6e91d8729e2dcd27183e2c5435"],["/post/a50b8908.html","ca990f50eb5ba63827665b3cf83331b9"],["/post/aa1eade8.html","3b4ad205ee42cb68762f04d090f35d52"],["/post/ade8c6d6.html","483ae7c1dd790f5aa78ef8d56b20f1a1"],["/post/ae8362df.html","54de17ce028e78e3e07aaecf25fc1e2d"],["/post/af3eed3c.html","a10553d984ca53ada33e19aeb8fcec1c"],["/post/b4c1d206.html","5c346b73840c120e8538c3c99e0a0528"],["/post/c82a1c99.html","d46d6e032362f3c4b55e20f1b476d4fa"],["/post/d213fc7f.html","4a0b3e4a245eb1c3e543f03fc827bdd2"],["/post/d431fab4.html","213cb1fd55d9fe4e36943865b5711855"],["/post/d5381517.html","8dbcacfefedbf3d524374db5d25155a9"],["/post/d94f88de.html","34680a214b335f7e40ef93e2ac495df4"],["/post/e058ffd8.html","07d2f4b8c9b67ddfef398e9459416428"],["/post/e0f8cb74.html","bcf0f66a832063c721c0a8259be282e1"],["/post/eefe591f.html","08a973d23f7d01590455782a41f850a5"],["/post/ef296a07.html","eb587ee6dfbb724fdc2bb1a8c1620984"],["/post/ef3a3fcc.html","017ec8d14c4610038e83a444703fde1a"],["/post/f201f9fd.html","d4bba7c14bf57b94dfaddc0dbf8c5f70"],["/post/f79e4123.html","f840f73cb87f2801a13a7a6e91cfdf4b"],["/post/f8648a1d.html","d9aefcb5c23c0cd1fd14efdecdc2da9d"],["/post/f89cb603.html","49885abcc94b5fbbed306936218449d0"],["/post/fa288682.html","873aff7ef3d2d753bc0aedccfad5cff4"],["/post/fb98053e.html","c9e9c0e8f08f026fd4e1ffc6c7afffe2"],["/sw-register.js","04c0440e5979043442892134e506edb7"],["/tags/AT-T/index.html","6eae2ec6dc38db3e0e56f2660f6993f9"],["/tags/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/动态规划/index.html","008b452b94f615330db343b11b2c0172"],["/tags/字符串/index.html","5db409031a102b660eb7b356435563b4"],["/tags/字符常量/index.html","d36e8bd74a0eaf16e63ff36b32ae914a"],["/tags/快排/index.html","111ef9b47d9a30c9be01c9b64f280361"],["/tags/排序/index.html","5ea6705f6b9d89002e8f2a0680d917b4"]];
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
