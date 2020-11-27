/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","b638efd3ddd68f1b52cc3fff6043ae80"],["/archives/2019/index.html","9b8c73a0c354d2dd1f19332c82496ced"],["/archives/2020/01/index.html","607928d694e5228056de7a59460f0fc3"],["/archives/2020/01/page/2/index.html","04c9638bfa009adecb9d1d2156273896"],["/archives/2020/01/page/3/index.html","fb4dab0eba7b178c7d26be5833f97864"],["/archives/2020/01/page/4/index.html","2f5e5725044ef76a9e2ed339cadeee61"],["/archives/2020/01/page/5/index.html","d2aa25574381a695359a25668cac9b1c"],["/archives/2020/01/page/6/index.html","d0c84d545b586e5e58245b7af34ed22a"],["/archives/2020/02/index.html","672c0538c1789ff3e2b353cab74362b5"],["/archives/2020/02/page/2/index.html","40310e66111b60f5c84deabe33696333"],["/archives/2020/02/page/3/index.html","9e8c24d5140c28fc511fc59a7ea57fc0"],["/archives/2020/03/index.html","c6c7081e292267f205216c34634c0c16"],["/archives/2020/03/page/2/index.html","9f4a2d7ae92ae0ebc3485dfc5270f7b3"],["/archives/2020/04/index.html","0c581d3fa0af4b469d2bc0b7b0731aef"],["/archives/2020/04/page/2/index.html","b0af4d639244f83396f29f9935d5bbfe"],["/archives/2020/05/index.html","350eb2ba2019cef9edcd71a491298a53"],["/archives/2020/05/page/2/index.html","ef96f9c43668d62e4cca17d6b940cff1"],["/archives/2020/06/index.html","d3b53fdf977826b2f287afa96bfb9335"],["/archives/2020/07/index.html","fc4b07b9a684552f2141874dd7f455cb"],["/archives/2020/07/page/2/index.html","6a27fa3bc4398355c3f774b63e071a3a"],["/archives/2020/08/index.html","ff7c80db4a7f14d8c2ff683660754e56"],["/archives/2020/10/index.html","c06f790d616f365242570feb5a912cdb"],["/archives/2020/11/index.html","b9ed7862b86e7067b28fd02b63d4537d"],["/archives/2020/index.html","8da0d2fdc3fe226180d8a2d954dca284"],["/archives/2020/page/10/index.html","7ceb3a604bcf867ce9e9509c85d63bb1"],["/archives/2020/page/11/index.html","206452b2c4838bf7217daa9c62b83478"],["/archives/2020/page/12/index.html","f3c0d2060c6a9d4c35e986f612c5de93"],["/archives/2020/page/13/index.html","da6ac75e44c11fd961b31a044af2c042"],["/archives/2020/page/14/index.html","a592d137271436005f540ee8929852e1"],["/archives/2020/page/15/index.html","66a435e99494cfbd2146cbc11d0853e4"],["/archives/2020/page/2/index.html","955785d082f57441e8aceb04f99aa236"],["/archives/2020/page/3/index.html","bc37c23ad74aa57552f12414b75fc4e3"],["/archives/2020/page/4/index.html","fba22dae7f1f176fafafd1b03bf4e6f5"],["/archives/2020/page/5/index.html","32b372d10ebde7217f203abd5668982f"],["/archives/2020/page/6/index.html","b15de3bee6c78128187b41585c71bb95"],["/archives/2020/page/7/index.html","a21125d2b86b6380419638b5af13c106"],["/archives/2020/page/8/index.html","79136432deb3674a17846dc8e3194c0b"],["/archives/2020/page/9/index.html","ebf26c5e3efca646af7296de47a6a98e"],["/archives/index.html","cd8642e9d7c4cb44eb571e20d9d05b47"],["/archives/page/10/index.html","12168874deac98ceee3f68e43ff6aa35"],["/archives/page/11/index.html","b28a6f0651aff56f4c4d7dbf4de130ae"],["/archives/page/12/index.html","eab9fe062a011135b51b87ca8c09e665"],["/archives/page/13/index.html","e64a50c003755639a7632996293e61fc"],["/archives/page/14/index.html","b83165feade352c48692dd6d36e343da"],["/archives/page/15/index.html","442f98265c8f1325fb971a1dd87a6d4b"],["/archives/page/16/index.html","9481bbef0048f10056c87a9e241dd30f"],["/archives/page/2/index.html","96531bf4fb6a7d5716c6e24006ba6b14"],["/archives/page/3/index.html","143512d909fd137d6c8b9535d08cc131"],["/archives/page/4/index.html","70916aca15d64dc4128e18d2029c2698"],["/archives/page/5/index.html","cf95a09c8a04fe145293cedc8678cd84"],["/archives/page/6/index.html","5c461f29503110a37b6dc17716c62379"],["/archives/page/7/index.html","a90a31827cd189e8f038850df350d26f"],["/archives/page/8/index.html","664cb2e940d453ebe9fbd920d6a050d8"],["/archives/page/9/index.html","ce98073a92aa79ea2abf338e5975c509"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","b3e038dec6916fdaa6f3ad4a9528d694"],["/categories/Linux/page/2/index.html","b3340ddff0d6a637914eeef797c07a85"],["/categories/Python/index.html","79d290abea085464854ee558573cfacc"],["/categories/c/index.html","06a67986097365fecab5840cfde4bbb3"],["/categories/index.html","e4a24f096626136c58cd0c4d857b478f"],["/categories/java/index.html","ec14730b2865fa1f1c388c5fcb492615"],["/categories/java/page/2/index.html","8bf6dcb2d536c17999c8071882e691eb"],["/categories/java/page/3/index.html","c6d47f3d12dcf0494aff42fe40cc0ffd"],["/categories/next/index.html","3152e3be54c6a9a87d4c510b0fafec58"],["/categories/stl/index.html","f78dd96c34405bd2f60ffecebcfed93d"],["/categories/windows/index.html","bd082145deed56b199c45a4bf3db2a3f"],["/categories/基础/c/index.html","3a395b9988daf9514c859b2f080ef605"],["/categories/基础/index.html","ce396bf1191c333891716d06a751a73b"],["/categories/基础/page/2/index.html","bdf9ab9380ae3ade7f78fd4d6bed2230"],["/categories/数学/index.html","f3a6bae7c1894428cc425df0c36e2d10"],["/categories/数学/概率论/index.html","8ce0746a511159341669363f3eb2a906"],["/categories/数据结构/index.html","3a23e12969d2275f0c26e2c1db06f932"],["/categories/数据结构/算法/index.html","8928cbb9afbadb7321eb008139819e1c"],["/categories/机器学习/index.html","9ae094c2796f6dbc61867e32c04c3380"],["/categories/汇编/AT-T/index.html","a46594561b597831f3348004868741bb"],["/categories/汇编/index.html","124931a56676809ad66fd1cbd91d61cc"],["/categories/汇编/page/2/index.html","66742b925a665b34b19f9014313ba751"],["/categories/汇编/page/3/index.html","799eeb6f4cbf4bad3984b8b86bf3aea0"],["/categories/算法/index.html","e2880c88bc173986e33adebef8769044"],["/categories/算法/page/2/index.html","331c61cb7a3d87fe4726a0c6bccff35a"],["/categories/计算机系统基础/index.html","fce46644ddaa1e608ab304146ef1e150"],["/css/background.css","39b1b22e2903e556913dc52516e1e7de"],["/css/index.css","ae66f464ddf98fbdd1920fb525722a20"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","906d28d166f7843b0b922a40af299f7c"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","b991ff70468ec4c57bd33aca6cf518ac"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","5bdb3214b4813f04a244374563c511cc"],["/page/11/index.html","434c38e6fce4eaaf838909be87ecba35"],["/page/12/index.html","a3464cbbd7d5e2de520272f44b5336e6"],["/page/13/index.html","b92b6dbe14097741668f963c8630097b"],["/page/14/index.html","ba12245019f232903444c83816b0e0f2"],["/page/15/index.html","acd533148cd3387d15c94ba5dece4342"],["/page/16/index.html","890625fd66e352f4dd7d62dcddc35b95"],["/page/2/index.html","2a09131f6e79e2c4df15469e2cd958ce"],["/page/3/index.html","25a563c0e4fec62fdfec25752ee74a61"],["/page/4/index.html","2dc617aeac262a0ad610ae0ce899f54a"],["/page/5/index.html","eb014a3ad44d3b174f9468949443fbdf"],["/page/6/index.html","d13ba45cfde11a128819b1cfa40a1f96"],["/page/7/index.html","360a397f237f7b864f1c7d8522d9e86c"],["/page/8/index.html","9955e9660bc38199a667b706446af373"],["/page/9/index.html","acc240fb59d63bd1727d0a476e9b9615"],["/post/10919.html","ea46e8ca926117cec783f34f1e1eed2f"],["/post/11051.html","55a1918f4de7174c10932033ddf85f41"],["/post/11306.html","06dda479c7f44ae13e129f1175bfcb53"],["/post/11491.html","cbab568faed3418766d1cfc58284d96e"],["/post/11799.html","e19bf545c8b49a1963e9716a5934ac39"],["/post/12334.html","ef5096324e170e80d1153d77866c8144"],["/post/1326.html","705215da7ed26a7cac411cbc434eced1"],["/post/14379.html","295a42d8b7d4c61012ed3a429c3cc69c"],["/post/14511.html","27db2d2ba2f23ef8b765692a24145a96"],["/post/15201.html","23ae973e6cae4ce09d99785600c68439"],["/post/15425.html","489f55451fcd543a56b6e062015ded44"],["/post/16107.html","f48063347d5f47359bc0e0e672b77d85"],["/post/17862176.html","16fb9b1e5a519fcd9bfd82ad6c4ffe49"],["/post/18431.html","fe93b68c5f23d723cfc4c8e4a921b8b5"],["/post/18912.html","63611cd5efb4ad09a5cb04377f9e3f4e"],["/post/20198.html","603e027eb19ca059f4c0925e10509749"],["/post/20ff5ccb.html","7eab91a3355ccdf4a3c662c5b7fcea8f"],["/post/21624.html","aab0c7e6ab2e6ddc0e1c6c942a49a87a"],["/post/2170659a.html","dd976a2ac2ae7c963344a1f7a81a5477"],["/post/22102.html","5e22fd88d90456c8073f3c6b465c92f6"],["/post/22493.html","ce1044a2c13e7189b56e4c156a6ab607"],["/post/235252ea.html","9edf633af0d5e992c4d4fb9633dd9e39"],["/post/25699.html","4eea26e77a619299e7129841612d2d90"],["/post/2647.html","281a8b609e51803d2982656e70692260"],["/post/26477.html","3d74a823de8addbb8ae19ebbaa56dc63"],["/post/26671.html","36c4a59de723bb768eeb8740ce74305c"],["/post/26737.html","c3362f224c44ebe457b14670f3392f90"],["/post/27045.html","e4a126a45067b18b22db72f06711cfff"],["/post/27621.html","2e0ae5bfcbccb4fe83c9a16c62031a81"],["/post/27890.html","22251059c45777d4421816e2c64e56b9"],["/post/27980.html","e7b0171125aa2a2183250eab763353a9"],["/post/280b588e.html","12c608f176f889a24c1eac66ff85664f"],["/post/28579.html","c94533f00d1235c277940861beddf1d9"],["/post/28877bf.html","f689aefe03aebfe1cb45031d944158d2"],["/post/28954.html","f3e4dd54a6b63075f7e920ab740f4068"],["/post/29378.html","5be5d0d86663f8a9d783315efb06c7e3"],["/post/29949.html","f1e12177af7de959756cc1d0495d2c06"],["/post/2ae43b86.html","0773f73faf2569f128531d3880417fc0"],["/post/2ba82a45.html","b88dd8570adb5fc520710fa5d6818ee7"],["/post/30072.html","646b2ddae34aa3bfc527e23ffa3dde77"],["/post/30479.html","501cb52a6dbd4ec5a67e43654d0d1b20"],["/post/31a6b40.html","faf58e6b169f06573433c96b8e909fa7"],["/post/325cdbf2.html","61956c0ab17cd24aa97a68367a425cd0"],["/post/3319ed9a.html","5a1760568a79cab11c983ad569c5d429"],["/post/3320.html","27297546da255e1f01b9c37f45519ca8"],["/post/33cb1151.html","7c1aa9524b320fe4b3b95dbd035a7950"],["/post/348d4e04.html","baf359d78efe5b11ed62f0e5dc1599a7"],["/post/3526.html","bff7f2ed8f7d4d3ecc5958be0a08e531"],["/post/35532.html","72aada402f961a9289ce9e9414dcbb3a"],["/post/35848.html","9325e8456a06d6d5bf5d264d940b7e38"],["/post/37318.html","96d408dab142dba60ad93b6a350b24ed"],["/post/37663.html","6105888ce6b94a2cf9d032e347585ab1"],["/post/38035.html","0b101d8db3ed366ff95c880c0a990a86"],["/post/38072.html","53048f554cdd625803ac8e154e3ef45b"],["/post/38145.html","7495eaf365d375749e62765436cc9f33"],["/post/39968.html","d72b78783f4a9cd3e25c5721ae278ec7"],["/post/3de4bc69.html","0498e9f91f07ad0f2426e0e7e3c2d8d3"],["/post/40583.html","b16aeda24d12156005e173d377996e30"],["/post/40997091.html","92a19898fbf731e8f92a55fc2471add1"],["/post/41129.html","65471ecce102c78fa0793c7e963d07b3"],["/post/41763.html","3fac378ce4d5db7260e928ebe0eef836"],["/post/41829.html","cdee97af5fb1e71b61c349d35dac7767"],["/post/41840.html","ffd1cb32c00842c79f8e65631df20bc8"],["/post/43817.html","4c88b7bd2705537089bb66895626252c"],["/post/43878.html","9de7a6982564fe3fe4b7fb45521bb8f1"],["/post/44250.html","c969f9d75724d29a8b6923132aa0d40b"],["/post/44336.html","085322695476f393ef74980c5825b2c2"],["/post/44454.html","18982baa9d008ae089d796e3966eca93"],["/post/44487.html","a98ce353b2064c892d2f169113d973f7"],["/post/44914.html","9c98f4d24b895c52d687325adba00eba"],["/post/4551c130.html","91278e4f925942a7821062671de0ffd3"],["/post/455a4c92.html","fecbdb1ee5c355c6363a7fae6881ca45"],["/post/46466.html","c17a768155486534de49974dca728f81"],["/post/46925.html","171f16a8671e7e9a345600fa52ff1cd1"],["/post/47075.html","353c9cc52d28ff949637ba2be83ce63f"],["/post/48220.html","bd4a125e7109588af3383fdf35e5a8e5"],["/post/4b1879e3.html","bc0a61edc5a7e2a61f40e83f89f00fba"],["/post/4c720881.html","918ba01dc169baa579ccbe76a3071950"],["/post/50daec4.html","7b59210e7cb7aab5bcb72053c13128cb"],["/post/51491.html","75202c6ef2553dac9618fe4f9613c9d1"],["/post/52078.html","3fd471d4d677742246dd5e32eb1c1ad9"],["/post/53677394.html","a9a56cf6298d6a940084af4bbd00fce3"],["/post/54300.html","4c9f076a462b6185915683810aca15ee"],["/post/54612.html","8becf08952df939c1499c7cf72da73a3"],["/post/54613.html","77aa8cc4f29e94972251be4c3395e11c"],["/post/54708.html","6a2bc08fe85744cbba9fdad66a67ea8a"],["/post/54778.html","0b50b570b9a1c24e4f813049648b13b4"],["/post/5490.html","5ea9e35ddcc3111ff0326f238c942c0c"],["/post/55046.html","6ed1b697fbc7cd20853b37b23d67fc25"],["/post/56929.html","04e15d1a61f5b586c320f4868f53a7ea"],["/post/57339.html","049c19db02b59b8cbd66d1882bce273d"],["/post/57449.html","2bc896167aeebba987c2161983b2c164"],["/post/57453.html","74b198115b8ba932794d04a2ad13fac6"],["/post/57671.html","1fa9852a218a8690a2b3daf6a79f83a2"],["/post/58313.html","ef62c3971c15e17374a91b1132825bdd"],["/post/58481.html","3dbbe38ebbffd318766817aa56b779a7"],["/post/58986.html","cd199e570ce87158a8572269d8478e50"],["/post/59431.html","bea3513e0df69a38b62a3745d95356a6"],["/post/5951da65.html","383c82b4a6fc9781215ef7322e677a6d"],["/post/5be7e977.html","67019502d4a66c3aea57c38a90afd9d9"],["/post/5f9e4eff.html","336b351de6ab6b9cfdb31b8036abdd2a"],["/post/604b49d0.html","5ab91b157ad854e9fcbc45bf95fcec35"],["/post/61312.html","f1064986113ca19bd3c1cc4cfc81eca5"],["/post/61738.html","baa9da62e548f6b3880267ad070ed5de"],["/post/61809.html","23e9b676c89fc7a404c23a8434df968b"],["/post/61eaf19a.html","afbcbf821a1ac099f8a0ff48fb825028"],["/post/63002.html","ea0cda015c671a1fd9361e7b792679a9"],["/post/63711.html","0bd8d3ddb61d1d9a4880a616db967af7"],["/post/6587.html","37e893fdf19a25e608876a7865c3a2fd"],["/post/6589.html","fb7342c8464dd3de4cbb121313cde7c0"],["/post/6880.html","bdc3759cead254e26de3e036a8d30a90"],["/post/70263071.html","325a6ae64d8abd49acfc5c5c7bc6af73"],["/post/71038564.html","bf72e53c266e2837a1727fb0afc9bf59"],["/post/7119.html","123c08053f70dd43cce0339cb12dba87"],["/post/74e7fdff.html","2f115702687c616c47d005058a85ccc7"],["/post/7502.html","55416c6837c0077bbc4ced4e22426986"],["/post/7564.html","ad5e83bdbbc741407e0ed3f7e050a2b8"],["/post/766f9b60.html","82d8f70a65adef935e83b95c4548f35c"],["/post/7ca31f7.html","1cd32caf5a45c102d0d0e41a960bf5cc"],["/post/7d1c86da.html","f9514b455df1b01a4d1f0050a8d6b80c"],["/post/7f3bcd7f.html","b27e83370095a7122a4b50f365e6b9e6"],["/post/8039.html","b1644736708ad2d3ff4b343217389bfc"],["/post/8050.html","79891296950deaaeba6d82dbaa008cab"],["/post/8072.html","bacf5f595ffa9251cb7b12f70cab66a7"],["/post/8274.html","a0278d5b995068ed192736d1ceff0a43"],["/post/8372.html","fe822862a3960a50f032d11c826f662f"],["/post/8498.html","c45c534445a60ac6ce093a5008115a26"],["/post/85b4e13b.html","690f8bd1d2763373703e0175de0e4a6f"],["/post/912b2566.html","9c708c6f89c67b26bc48e734fde67a36"],["/post/9187.html","11d693d0ae2ca815f6d0fd3718e8b9cf"],["/post/9197.html","dae6458c1c8a12f39af62ec2492be46b"],["/post/94ceb2fd.html","dc99faedae81234c52e107f85c9064fd"],["/post/95495db.html","fdd7fc939926432a771e1fe17985e1c2"],["/post/97246020.html","a95ceca9f056419e3a43bbba7179d2e9"],["/post/a3a786d6.html","d36ed289ea86a31b3b1447fe8cdf59f4"],["/post/a444b428.html","bb53fe420004c6cd0cb6f0fc3089ddbc"],["/post/a50b8908.html","df80b73d0b737a82fa41baec5c656188"],["/post/aa1eade8.html","a1cc61e70d988757a2d0c0d998641919"],["/post/ade8c6d6.html","5a4dd8fdb490dad7683b1eb06f94bcb9"],["/post/ae8362df.html","6c3e331bc4a79b62cffd3fec595b692c"],["/post/b4c1d206.html","7130336a289079ddc477d836dce289a1"],["/post/d431fab4.html","f4e60df22595a9bce6677bb74ecaad92"],["/post/d5381517.html","69284e8b36b6e5b99aa73441ce88f4ba"],["/post/e058ffd8.html","fefabbc94cf512f7b52ff03b2e5271a7"],["/post/e0f8cb74.html","931116ef31b8113ad07d2c4a2a83db2e"],["/post/eefe591f.html","f724ad0d185f234c3bd078cd2231628c"],["/post/ef296a07.html","7ac415b64a1dab3f2b262d77876b0ce6"],["/post/f201f9fd.html","11cb0d180b651b42baf898ac4d0473cc"],["/post/f79e4123.html","2431c2e7b67505634fdbe062d9d7a0a2"],["/post/f8648a1d.html","4f3bab7f676e29423b4a2f3c222b6c48"],["/post/f89cb603.html","9bbc0f170518c33997f1b8e9a1857cbf"],["/post/fa288682.html","c90a8dc1d7dcefbba4678ded6646f8ac"],["/sw-register.js","93a3b897134fa3dd1fdccca906731a9f"],["/tags/AT-T/index.html","abd1fcafc57c889181ec8c8ea96ed4d6"],["/tags/index.html","99d400560d9d5246cd4f13f474df9b07"],["/tags/动态规划/index.html","35e760ffa4222e7db8c21983430415a9"],["/tags/字符串/index.html","f87529114c84c41f66812d3994643927"],["/tags/字符常量/index.html","d7cf5e6ef32f848eb16a9617f8b3913a"],["/tags/快排/index.html","b3acf8046a3f9ac046979207dfd9e51a"],["/tags/排序/index.html","aa1432236b9f68a9258ef4969f06ae24"]];
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
