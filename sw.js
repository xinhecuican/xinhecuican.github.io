/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","15348763ae5c81befcde6c5b76314bb8"],["/archives/2019/index.html","893c082f8cd5133d38e88672c976c273"],["/archives/2020/01/index.html","7689c221adb566a7c8dc77f168e119cd"],["/archives/2020/01/page/2/index.html","28301ed2909f09243ef452bebcfbb5bb"],["/archives/2020/01/page/3/index.html","1f356487069fe5828b4b086c0e7dc12e"],["/archives/2020/01/page/4/index.html","db2d17639a52c297cb9e9ed409c4d3de"],["/archives/2020/01/page/5/index.html","3e19f03d7d4febfca59972c2b58054dc"],["/archives/2020/01/page/6/index.html","8b94c3067373c93c8d41942f26c36875"],["/archives/2020/02/index.html","e30b5446af4ab8cc7d560e3e413fe3c3"],["/archives/2020/02/page/2/index.html","717e2f0bbb4cf3cd622fb4e98d267034"],["/archives/2020/02/page/3/index.html","8626cab18f3627ae047653492295ee27"],["/archives/2020/03/index.html","dbe5cbedee815e357e4dbb3f29104430"],["/archives/2020/03/page/2/index.html","6f7c4911faaae6ef9c67efcecfb9ac52"],["/archives/2020/04/index.html","d36e3536a5722b13a643a4ee26a1464e"],["/archives/2020/04/page/2/index.html","d854998922d846fedda2cfd17ebc5cde"],["/archives/2020/05/index.html","68a2e4c06478e6078fb2949a1d2fcb90"],["/archives/2020/05/page/2/index.html","0c4796167bd7d35736b746b8585bfe96"],["/archives/2020/06/index.html","cdf55020493099e78ccea4de786b7c88"],["/archives/2020/07/index.html","a697752a574a9364c30058729ad86d93"],["/archives/2020/07/page/2/index.html","1f4f5fed64a36bf321ec31160f4ddb68"],["/archives/2020/08/index.html","81dbf5432e3eb2729ef77130ce5a4de1"],["/archives/2020/10/index.html","fc4af71adcdda5389f65562db7f721ad"],["/archives/2020/11/index.html","5c7d7368d2b834547e5cd6369d1487b5"],["/archives/2020/12/index.html","cc9d8c227fab6538025d994a8db427b0"],["/archives/2020/index.html","87d2b27ff819e61a09b943008d72f091"],["/archives/2020/page/10/index.html","08931826f1442927ab9e9a323dbe1d1f"],["/archives/2020/page/11/index.html","d03d2792d41bb870d0ae8df3fb876834"],["/archives/2020/page/12/index.html","cf01399880b7c9a7add91f0dd4990f54"],["/archives/2020/page/13/index.html","1521b370b445745a91441b4e317f35bd"],["/archives/2020/page/14/index.html","ca269b2a234de93323a08aca38f94d9f"],["/archives/2020/page/15/index.html","8492e4d45e26f1ee434cbe54302db737"],["/archives/2020/page/16/index.html","72a22a460ed59e5d74532d9c0e6555a2"],["/archives/2020/page/2/index.html","32d7416980077e19a3ce2cc422602e2b"],["/archives/2020/page/3/index.html","61a539e2fa89a91e5351bf1e7709c1dd"],["/archives/2020/page/4/index.html","b379c453278f970eef3f9fc16a288845"],["/archives/2020/page/5/index.html","10a92204976062cb75690b1cab187eac"],["/archives/2020/page/6/index.html","c14e56f1921823387ed90759954626cd"],["/archives/2020/page/7/index.html","0c235e1b4359c3ee2e19ff94525ef12b"],["/archives/2020/page/8/index.html","42133bc755982f56258c68b8df54d589"],["/archives/2020/page/9/index.html","3c252496bc694c5618b73c14db05011c"],["/archives/index.html","8f6ab6343104d62952ec3b920543c281"],["/archives/page/10/index.html","fd43cdb6daa65d59c99dfc750e7f951a"],["/archives/page/11/index.html","4b3f105ee7e89b021005868e71370054"],["/archives/page/12/index.html","07f450339067a6e36f9cf3cf0aa6f5d6"],["/archives/page/13/index.html","4efb5ceb687c1e0c779e102fa6a208ba"],["/archives/page/14/index.html","6bd9a1971dc1dafc07dc8e821d900d03"],["/archives/page/15/index.html","d14c63710956665fadab080b03d084da"],["/archives/page/16/index.html","ff499b4af7101aee683643859cb5dc60"],["/archives/page/2/index.html","0ed8e3b77b3dfbf65eb109a543259624"],["/archives/page/3/index.html","92305c27ca3a874e9b7f409bdeef2c33"],["/archives/page/4/index.html","e30a2142881f14d1aeb40b03e3198824"],["/archives/page/5/index.html","fe6769bd66e4ffea6f0eaef28fb76b14"],["/archives/page/6/index.html","e09d90c3fc5f82d17754bbb1bffeb672"],["/archives/page/7/index.html","10a8e32f325891239219bd6b784ee4a7"],["/archives/page/8/index.html","83b0774908b03a081f0d4469ea0a62b4"],["/archives/page/9/index.html","3a3ca1507aa3fd19eefae3ac97ddc09f"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","914ea3c3161a6e576a867bacb95291d1"],["/categories/Linux/page/2/index.html","2405fc1a4cc919acb4a8281e40c12c84"],["/categories/Python/index.html","2e46faec0990583e9ae190d739063c99"],["/categories/c/index.html","6ce01a7000d674a8f029197452aaf787"],["/categories/index.html","e7153b89bee9f8950127f769830a2784"],["/categories/java/index.html","3d18b7a49388055c0eaf222e3cd0b9b9"],["/categories/java/page/2/index.html","524d44ee830aa582bca2942bb9b3fa45"],["/categories/java/page/3/index.html","e3b34e13375b701043d1d48d16580058"],["/categories/next/index.html","5240df30638b878cf8ccce837d028ab9"],["/categories/stl/index.html","c9e730bc8d6c59197e9287d307b5b641"],["/categories/windows/index.html","16d2a20a8652177ff65fed2b77123d24"],["/categories/基础/c/index.html","d72c1a15598a42ab6aaa2f0c097ad425"],["/categories/基础/index.html","ced2bb2225dd0fc67c36e1aeb8e4e507"],["/categories/基础/page/2/index.html","60c50ac00113ddf81e09aec8351672cd"],["/categories/数学/index.html","aaf7e1ac5510e3909464c858ce3920ec"],["/categories/数学/概率论/index.html","e12321f5c2f1c418ffc010819a6bb198"],["/categories/数据结构/index.html","225730cc737c26dac94d0874e28bd725"],["/categories/数据结构/算法/index.html","498364ccd03d53f685b67ce8a9a7122f"],["/categories/机器学习/index.html","11cc77d58d7c77c28a84b9a28af7fea4"],["/categories/杂项/index.html","ba7565921534aa0e1bfc8c36e06127d8"],["/categories/汇编/AT-T/index.html","36ec3a5b258a3328fe0a6bcff254ad8b"],["/categories/汇编/index.html","99a47210c5ba4aee7fcc7bf741c78c89"],["/categories/汇编/page/2/index.html","2b5ef2955295ff910dc868248d609d73"],["/categories/汇编/page/3/index.html","3070e5eee7aa2809b0b2c03e1217f984"],["/categories/算法/index.html","731e887176c577df2ef3daa1d5b295e7"],["/categories/算法/page/2/index.html","941fe6faf213f9e22031efa3e935908d"],["/categories/算法/page/3/index.html","ec26a7019d6052ad328c7cbc9187d558"],["/categories/计算机系统基础/index.html","fd77713d32dcc1593e5d0705fdf7a9e7"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","66017d4265a398db3e70daa9b0df1e5d"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","c639bd4fe0a3f3a3fdebea125f4b2700"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","ebc4146f42b16668d0ae2bd698c7172f"],["/page/11/index.html","1ac2d6b59d76f1d4fb109ec5da0202ad"],["/page/12/index.html","26233a33a360c27a7c24e3816ea76623"],["/page/13/index.html","7323c4e219b3377fe359b438f6b61f7b"],["/page/14/index.html","21091ea7b5b4ee5f8498a714d04a19b5"],["/page/15/index.html","c6959af1510be0327e432c4a3d80906f"],["/page/16/index.html","4fe5ecd2538176e874ecdf7a82356ff9"],["/page/2/index.html","d8909cca05fab5650a386fa8c3219dc0"],["/page/3/index.html","34c6af0dc2968722df530806e2d181bb"],["/page/4/index.html","a8a2f007b1d8e9a3013b309902a0bf9b"],["/page/5/index.html","834f41ece0ad5b1cf9d479ec70358416"],["/page/6/index.html","68be20f0dc91d72ee28bbc23521d1c66"],["/page/7/index.html","a0067d2e5b48584bd1066dd2afac0bf9"],["/page/8/index.html","63dce86d1de83db454f40cc8309943c0"],["/page/9/index.html","64340ddffe6025aef7211d30ac35788f"],["/post/10919.html","4bba56eb7b2906a4d130a1e666f6bb08"],["/post/11051.html","4380703114e30e90694b661daba5210d"],["/post/11306.html","6fbda854bcaff08f7abadaa866e48cc4"],["/post/11491.html","1e8cb3c3c67f6fcd512dfe1d2f3a123f"],["/post/11799.html","7aa3901e05d067056e3429ad8b4b072d"],["/post/12334.html","4fe26cf59a15768f2176392554f6d05c"],["/post/1326.html","059bc74c0977c7949f2c18bffb1a4f45"],["/post/14379.html","f6f82c08c234e5ada639dc88f249e28f"],["/post/14511.html","fba70c8632319429b7b7f784b0ed3fc0"],["/post/15201.html","da25497227239dafb470caef50ccb778"],["/post/15425.html","1746e05172503640ba5dcf1c4fe97dc2"],["/post/16107.html","281b89730910d89ef7cde34815cac677"],["/post/17862176.html","fd9668818ca7243ddc5c9320dd1e3a60"],["/post/18431.html","52b4eeb6c7af455b1edfa69a0a7eacd0"],["/post/18912.html","673c0562911fcfe2fcd4cf6b7dbc0de7"],["/post/1b9c8662.html","e84920264854c7d065cf5965b3980648"],["/post/20198.html","7b6f20e2a194eb3c076efe8077feadb4"],["/post/20ff5ccb.html","c99e1c87d3fb5f906b82b727695af23c"],["/post/21624.html","bb177eef308077ae21fe6f1816072a12"],["/post/2170659a.html","a1320d0e212eebd004e9a31df09df3d6"],["/post/22102.html","07268db103a518884276df34a3dbe02e"],["/post/22493.html","6e267d0c50f72209655e742d989c0ca3"],["/post/235252ea.html","2a004a84abd7f14ed87e6a635fee2f41"],["/post/25699.html","db4502e8d4343e273573debcb4ffcd6e"],["/post/2647.html","1a09ccc88f5c58ad7baceb5c02d9d610"],["/post/26477.html","5944121caa36335b96b38554a785fff8"],["/post/26671.html","330b72236145e9ab1b67993a673bfe91"],["/post/26737.html","2af3a8e44c203e51ec5f4c191ff92c58"],["/post/27045.html","f07bb7e10cf5ac430e3f7360af3b9f2f"],["/post/27621.html","3ac94fde13afe02e030e47d6e76efbe1"],["/post/27890.html","2b87d40a13630af0616b81f1e52025b2"],["/post/27980.html","f1591baa2381f765d262a738a96e989a"],["/post/280b588e.html","665f5196caf5fcd551c9f001dc0ac444"],["/post/28579.html","42f6ccff0f678049dc92ce4f4efbd764"],["/post/28877bf.html","688681c05de8b9311dc3829dfcd6114a"],["/post/28954.html","a55c9e8d265dc35c5b735751c4469deb"],["/post/29378.html","280aab60bae4f0bf2c794b6a3cc5ebb5"],["/post/29949.html","cbfe3f7c47ea30b889cde842cc887062"],["/post/2ae43b86.html","679eefbdd750186193600f79869806d9"],["/post/2ba82a45.html","7dbdf4bf182f7458c8446341ba89e613"],["/post/30072.html","9f36dd06ee1dbb32e4531cc17de46747"],["/post/30479.html","2c4cc5228022079dd1006d4e4c5887fa"],["/post/31a6b40.html","e5d76bb2e250faf7b9accfa7b9d1d124"],["/post/325cdbf2.html","e3f702b2609d7378ff9c32577f62bbaf"],["/post/3319ed9a.html","0f2d1e50ca1b953c6506afcd8d3c314d"],["/post/3320.html","884ffc131b07ce8fc942ddec3343c15b"],["/post/33cb1151.html","762ad92783a40603d7cce31d28b16352"],["/post/34811d5f.html","256dff973610ba2439ae808bb7cf5ed4"],["/post/348d4e04.html","9d29e6efbf3dce39c9836c07b0695bac"],["/post/3526.html","97dd8312174cdc68b8f26ffdcd4223ea"],["/post/35532.html","f8e1b1f1230dc2b5946d4e7d6a9ca52a"],["/post/35848.html","261972bf42da35b26c3bb34197911fdb"],["/post/37318.html","c732e5acc6a10d556e1b7c5dc3f72200"],["/post/37663.html","32bfd98b67d1bd015e52cd18e03c1452"],["/post/38035.html","a94aa01a9e4c52ca0f46803904d34936"],["/post/38072.html","1190fefc5bb2927c8e7608d80872570f"],["/post/38145.html","e394bfaddc2029c7498a9d29fc216b9d"],["/post/39968.html","7078386e121b6b67f5685ce7198efb1a"],["/post/3de4bc69.html","23b919a85a686440eead941e4d776191"],["/post/40583.html","0e720ee5ad7a5a973bf6c32ba6718c3b"],["/post/40997091.html","6b94b0adcaf6d80fbf894b2b01b0e6fa"],["/post/41129.html","088580ae8ea94ab96a6d4324dc6f4aa9"],["/post/41763.html","27a64d486abfb8fa100fc322a9926fa1"],["/post/41829.html","48dacd7ae0fd817d5f0413b111956018"],["/post/41840.html","5c4fb19cca7473cbe5f4521d65e1ae52"],["/post/43817.html","17fb55d313604ed3fdf57a78c1464baf"],["/post/43878.html","a9f1a1e3352e790d5def6eef35009a82"],["/post/44250.html","76206950e444055f499d429672642add"],["/post/44336.html","a02d357b4c818197bcbf17b62bbac3e7"],["/post/44454.html","69fa94a4c7be798cbb70230137e5d6f4"],["/post/44487.html","e5e42e1024e4953a589f922785b9c2ee"],["/post/44914.html","243641248295d2b3c4b92f0318727794"],["/post/4551c130.html","54869e4a742387118c5cad2084d459b5"],["/post/455a4c92.html","d3e7a28fa1a7e0f3e820dc5b426aec2e"],["/post/46466.html","bdac6053e01c7adcf44eda6b979b8c2e"],["/post/46925.html","3826e743557545cac5acbe0b8b68cd53"],["/post/47075.html","b9a2a74971b5fbaa72f2b0387853335a"],["/post/48220.html","9e66fc94e363ba9b731c6486fcc1385e"],["/post/4b1879e3.html","1f271f5146188bae4c5dfbafe2771379"],["/post/4c720881.html","f60e49458631cc7ad54c8340b1418bbf"],["/post/50daec4.html","02c66c7cc5fe50592195ea5e28ae1661"],["/post/51491.html","bb729186fc578a7ad922a73dae4fa12a"],["/post/51e63dcf.html","3514ed5b95270c6d11a991433476c19d"],["/post/52078.html","602d12a973544348a6175f8bb083a8d9"],["/post/53677394.html","c0d9a2c2a5853bd8a67cf21bbedb4212"],["/post/54300.html","c91494c7508503d9cfe0ef7e3b433243"],["/post/54612.html","2947aa19c92b00e44e77b9981a7183f3"],["/post/54613.html","bd2abbdc00bb87b6ce34d27d0a405cf4"],["/post/54708.html","de9e80c8a34841c19bf48a294061a244"],["/post/54778.html","2ad20e46d064642ddd00632b796f5ae1"],["/post/5490.html","9141c68fd39236bc3e643963708df311"],["/post/55046.html","b81026ac60e364185ec33d912ddee4a4"],["/post/56929.html","685dedf38c124e2c13a797dfb08731fb"],["/post/57339.html","a31eab0b6279addb18d816284b2635b5"],["/post/57449.html","ee398398afcdfc0719e1dcc5fc77aabd"],["/post/57453.html","3042681b63e0a63dd21fd495247744f0"],["/post/57671.html","ced47cf8ad42e21a920cc40b6331a2a2"],["/post/58313.html","6048889333149bc692761fa23ef12d45"],["/post/58481.html","202f9f5a7185fa03d0d89684dbdb017c"],["/post/58986.html","3057811cb63380dcd3c80bca94222730"],["/post/59431.html","d960016d756a01dfe1e13a8ed4716372"],["/post/5951da65.html","65134b04941d80358d03252102a15794"],["/post/5be7e977.html","0815b5f2654f3a5a2dc99e4b73c56f70"],["/post/5f9e4eff.html","f94bd4482e9c7a566cd8f4bad67b9ca6"],["/post/604b49d0.html","c6a1f1cfd7c757f9e0a577b34c422147"],["/post/61312.html","1cc711687a1e4d07f74e2c8d62544501"],["/post/61738.html","c5b8e3304f72923b1037cc05091e7cc6"],["/post/61809.html","ba6ddbcd99936f41ff3917bab37e40e8"],["/post/61eaf19a.html","7d3c20946450cbf024cd7b8f25fb4762"],["/post/63002.html","a079cadd16f6debaf3cb586672260db5"],["/post/63711.html","b2df071f54ee05f53d9f3164b2188368"],["/post/6587.html","d6897c7697529b018c7e9e71b3befe1f"],["/post/6589.html","28a0836f473bebe73abe11ffd157d677"],["/post/6880.html","d6a3079249868c85a12bce1aff429c6f"],["/post/70263071.html","80dd9a1f64bee0bdd2751681601b05dd"],["/post/71038564.html","e3520915ec0fee50dca92122776d0a87"],["/post/7119.html","d74f5913732d57e59b9bc2e7dd637c70"],["/post/74e7fdff.html","695738bc5250c74f0f8d1c3d83c18079"],["/post/7502.html","37f6e136591e5afe515bbacfb106ba70"],["/post/7564.html","d96dc03329cddb1afea80e3d1aaeed0c"],["/post/766f9b60.html","47520021be541ce3e624e0800ee5630c"],["/post/7ca31f7.html","cf141427c86a6bdf12f8a54907608e48"],["/post/7d1c86da.html","91008e058ee86c5704263530bd48d497"],["/post/7f3bcd7f.html","3b6510e1de08ccc0025d1e3a92748a0c"],["/post/8039.html","d7f9e60c816362b08d2d958435a80d63"],["/post/8050.html","41b06e0b15f77c02dc782ca2633c887b"],["/post/8072.html","70479172816127727ec57dc74a94f0d9"],["/post/8274.html","f25c81896c39e4afe3436725abe399d5"],["/post/8372.html","26b39ddbb21efe56c9063974ec8e6994"],["/post/8498.html","d7a9f2e580163566902744f23c828609"],["/post/85b4e13b.html","1b0b06cb428f33b2c7ae8c2637381698"],["/post/912b2566.html","d903dd4bc001b90ce549f200f3fc9af2"],["/post/9187.html","0adb8178ebab03afcd950ac403bc3f21"],["/post/9197.html","41eff46a9853c8f617f02fe95d5d8cea"],["/post/94ceb2fd.html","f400d0ea557c23f62cb4eba9fb9d99f4"],["/post/95495db.html","f6f5992131f258b1cf0e24e6877f0fa4"],["/post/97246020.html","ceba7c32073c753d0fa638b737fb0a8d"],["/post/a3a786d6.html","a7f053ec0bb44c29ef98a088d294eab3"],["/post/a444b428.html","050ae940573b23273f5de3926258a02c"],["/post/a50b8908.html","8fbc8a2c4d23f63dac73315cfe546b98"],["/post/aa1eade8.html","834d59aba14b8ac48d39dc1dfb6995c7"],["/post/ade8c6d6.html","b8e2410206b28bc8cf32b29d6d776f77"],["/post/ae8362df.html","ac67602620fbdaa4680f8a63fe7b69e3"],["/post/b4c1d206.html","3f786dc4b814a465623449272390d054"],["/post/d431fab4.html","5520f8d28344303bf1dda3b41ad2d5d9"],["/post/d5381517.html","a0253a048573134b540f53a7e78d597f"],["/post/e058ffd8.html","c72e59086b0c3b0742eafcf92d75e1e9"],["/post/e0f8cb74.html","67534f4adcc90bddcb11feaaa60796e0"],["/post/eefe591f.html","8d5b54881ec5e5e5c918227035f95c66"],["/post/ef296a07.html","5426296686e9634e908f1fbc61d1fa28"],["/post/f201f9fd.html","d8102b60dd9f2df1eacc7be93b05886c"],["/post/f79e4123.html","92a8eb108017dfbd70330e62171bb3cd"],["/post/f8648a1d.html","7dabb71c29a22662946cb17327999ecf"],["/post/f89cb603.html","cc75cc9e414d5799dd19b0a5dc3424c7"],["/post/fa288682.html","85dd51cda03fc28db552f821e6c0940b"],["/post/fb98053e.html","5b82a5e5d04b56411f3b1aa1b59de401"],["/sw-register.js","9409bf3a966f4fe2b470814aea92ad7a"],["/tags/AT-T/index.html","f93c9e9c86157aa5677acb10bffcd0e8"],["/tags/index.html","be880b732be9a6276371f21fb9c88a10"],["/tags/动态规划/index.html","6d3387bb18ac0e19a9f282aad119cafd"],["/tags/字符串/index.html","d632f5e03cd333fb5d806ec0e3569dd1"],["/tags/字符常量/index.html","2f311be7c9548b4c7c5997efd16c32b7"],["/tags/快排/index.html","e11e91d258e684a8a4282a7a90d73114"],["/tags/排序/index.html","a0bf8a72f14bb7d6246ae96053b2fd71"]];
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
