/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","2fa7b9e7a6f215d69c276b00737ef917"],["/archives/2019/index.html","ddc8a555390470ed9271643be8628fb4"],["/archives/2020/01/index.html","a5b93dc5957e984ad7c45baa6de2e715"],["/archives/2020/01/page/2/index.html","454cb3e922ede811eb1eccd75aa69fb3"],["/archives/2020/01/page/3/index.html","8245988520e7fcfd9e286255b7836822"],["/archives/2020/01/page/4/index.html","c41050af1609995df1562c62438bd59e"],["/archives/2020/01/page/5/index.html","92b954a291e91c7417d1f3832e240d9b"],["/archives/2020/01/page/6/index.html","215f4c259e85cf15e464e2ce9263839a"],["/archives/2020/02/index.html","f5ceda99e1f83029cdad52af801689d5"],["/archives/2020/02/page/2/index.html","40317be29871b7f1ccca5029f77ba570"],["/archives/2020/02/page/3/index.html","13e85fcfbb76e9e8e2498c78906619e7"],["/archives/2020/03/index.html","b05f55d431cafb26346c7ded5262426d"],["/archives/2020/03/page/2/index.html","21199a08a8de0f62a0a994b46c763b0b"],["/archives/2020/04/index.html","2d6379e17bbd15ee765e61994c099f87"],["/archives/2020/04/page/2/index.html","3d9dcc8be85ea6518df1803f9d854cfd"],["/archives/2020/05/index.html","39b4770fe9cd3bdb76da2e126edbd1fd"],["/archives/2020/05/page/2/index.html","a40aac061ab649d9a430cc98cd05cc7a"],["/archives/2020/06/index.html","270ec41829759f3a5b3f987730af69c3"],["/archives/2020/07/index.html","d0ba4515c8fa07cbcef39384c8ea8ccf"],["/archives/2020/07/page/2/index.html","6320c40ff5707d9bec01a046e5e6e620"],["/archives/2020/08/index.html","79d74559b6eb556ae1f6ddbe524c42ab"],["/archives/2020/10/index.html","1503e139479ae4d569b1c6e17380b3a5"],["/archives/2020/11/index.html","a5cc23ac7f30889f2d87c063a718d4e0"],["/archives/2020/12/index.html","783b2c1f239a9664746f14b19ef0850f"],["/archives/2020/index.html","2342b3a3e68bdebc42707fd550a9aa70"],["/archives/2020/page/10/index.html","84d9a7ed10a8131e76d5469fede2c986"],["/archives/2020/page/11/index.html","c204ce374b227e04bc01c5331f0ae4ac"],["/archives/2020/page/12/index.html","c7fe451f32383e0990e64cb1ba31f923"],["/archives/2020/page/13/index.html","ca1dd1aa33c39a696b08fe157017a92a"],["/archives/2020/page/14/index.html","3e297dfec685645a27c09a8559380a70"],["/archives/2020/page/15/index.html","fc8f3224b29f75b3b1d27eec4a6445bb"],["/archives/2020/page/16/index.html","1ac51553c537348ea6ced67867dd7034"],["/archives/2020/page/2/index.html","edac8ba242a3f7fb4c29e0ec1d121908"],["/archives/2020/page/3/index.html","8235e280f947e9622ddbd7d15de1176e"],["/archives/2020/page/4/index.html","0b1311b074cfdb1f2ce00755a79769d7"],["/archives/2020/page/5/index.html","3373afc3f1c50aaf5c62b6f2a05823e5"],["/archives/2020/page/6/index.html","f774c6cb1edf474b0e2abdb684f4104c"],["/archives/2020/page/7/index.html","0b7af8ee81b71636d6014d6138e444a8"],["/archives/2020/page/8/index.html","e4d6621b16867c3d1a128c89be156d51"],["/archives/2020/page/9/index.html","a696a7319b3cb6f6ac11a74083d81f94"],["/archives/2021/01/index.html","ba748ab06a649290d0343fdbb1ef7d9d"],["/archives/2021/02/index.html","0af62d37599dd3a9cd878a0e04a3689d"],["/archives/2021/03/index.html","7094b300b38236905f990682b9d8c599"],["/archives/2021/index.html","dab86d280266fc33d2f6a5cdda8e2a30"],["/archives/2021/page/2/index.html","305fc8b952fec807250792c331c47c4a"],["/archives/index.html","49c3fe11e939ac0d538034772ac731aa"],["/archives/page/10/index.html","9ca2df941f235f8775cb811ab1f214eb"],["/archives/page/11/index.html","a8e251c5e20de3c06eba00d39cfd3f9a"],["/archives/page/12/index.html","9e6dc7bda8c9d32cf0c36c233cf53848"],["/archives/page/13/index.html","258751187bec127130a3db24fd2ffba1"],["/archives/page/14/index.html","a96a495ee90b4fcf806cb6bb640dfe49"],["/archives/page/15/index.html","eea0904edb4a39ef43791798640e2ef1"],["/archives/page/16/index.html","a030d0b98f7e0189be2f835369f101e0"],["/archives/page/17/index.html","dff52d55975fef6bfde1540881c6f8e1"],["/archives/page/18/index.html","75632314445a0e91bf8a1a8392d41a5a"],["/archives/page/2/index.html","d3e2b3f344dbbb209c55009c6e7bdda3"],["/archives/page/3/index.html","f97782e8652b64291e7bd9d54247d412"],["/archives/page/4/index.html","dd005686a148b1e83cc5523565d8fc68"],["/archives/page/5/index.html","b302fc2533830826d13ba342cef4a283"],["/archives/page/6/index.html","ca93bdbf4ac2cf9ba31f9846ebdc77b4"],["/archives/page/7/index.html","3f77ab778d1cc7da7138b6b2de58dfb1"],["/archives/page/8/index.html","56b3ee0a731b3b2a47800e08c0f9b297"],["/archives/page/9/index.html","9651abafc3b7e9f62dd92f5033ac4d20"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","17b6c874cdd94478d308136651c0073f"],["/categories/Linux/page/2/index.html","6a42afc1a913db69791e5a1975e8d68b"],["/categories/Python/index.html","e02c784a2f7eeaa4cef97c2c14872d06"],["/categories/c/index.html","866135f8fd47dbd5390a0bcf3c7fdf29"],["/categories/index.html","aea7e78654eda16390387c9201a28854"],["/categories/java/index.html","3caa4f4eee05a921a75fabf7c5a6d9b4"],["/categories/java/page/2/index.html","8db6493f4437b76608125cd7b208d9f0"],["/categories/java/page/3/index.html","09ac3f6a7b66fb546ae1562191c81342"],["/categories/js/index.html","e5abb1d9793d14790c7c0f0efd77f97b"],["/categories/next/index.html","8f9d42ee6456e05d4be2cd5e73576783"],["/categories/stl/index.html","fd653ff1e061f24cc78a224b19b9b856"],["/categories/windows/index.html","76916008aee0e9356d26db05f699bc86"],["/categories/基础/c/index.html","cd4ec461ac28daa69ed920ae04624685"],["/categories/基础/index.html","becbfd94851ea83e1d452bc876de7822"],["/categories/基础/page/2/index.html","922d960c6044b7c524bbc453404a5f6f"],["/categories/并行/index.html","84b3ebcd4ee3a163c630907a18cdc872"],["/categories/数学/index.html","6d14ca748d063da1c76cff711ae24fd5"],["/categories/数学/概率论/index.html","d4d678cc39cba82383dc9c5f3651e6f1"],["/categories/数据库/MySQL/index.html","9855386ce639a9bf1f6f0b02ce53842a"],["/categories/数据库/index.html","ad0831aee74d7f57bee3bdd3e803f2f6"],["/categories/数据结构/index.html","2fd8421e2277a65e96e94ebd1af8faa2"],["/categories/数据结构/算法/index.html","ecb0458b3982f526204e9cd334a17980"],["/categories/机器学习/index.html","bbe890a9708f04a704318ee8175beac3"],["/categories/杂项/index.html","f96428ce7a06198127995ec1c830d6b8"],["/categories/汇编/AT-T/index.html","69a6ac3853e2b9330ed073f8677cb768"],["/categories/汇编/index.html","f0a54b3a02d9cf40355ec7b6273e8c2d"],["/categories/汇编/page/2/index.html","e6ba6363a42ec9480c72de9907cd1545"],["/categories/汇编/page/3/index.html","a519531268c104bff5b9fcbb517e0626"],["/categories/算法/index.html","03b964006f7e10da6c67c1c98005aa2d"],["/categories/算法/page/2/index.html","a8fcc4d358b5fd871b4a20bd609cfe2f"],["/categories/算法/page/3/index.html","899c527447b7ae204835e5bed23f3070"],["/categories/网络/index.html","29291e294d7aab6aef87176d21c60dfb"],["/categories/计算机系统基础/index.html","b438889de70b7def74e1aaf3a93b6853"],["/categories/计算机系统基础/page/2/index.html","6f0b8da4db01cd1bd78c1038376d978f"],["/categories/逆向/index.html","41894a023a5d38ae8b2e2f6baec50b6b"],["/categories/逻辑电路/index.html","71de0826a86a5cee6d42dca8b6cfefb9"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","99d2e05805dce9ae2f36041643c299bc"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/HTTP1.jpg","30e1bea7769f2cec34130f180904cf65"],["/images/InkedInked组合逻辑设计15_LI.jpg","20358d0724cbb38cf7ad4897cd252a4d"],["/images/Inked组合逻辑电路13_LI.jpg","b3be5fab7d61b73a3fea5e2692d7de5e"],["/images/Inked组合逻辑设计14_LI.jpg","e05debbb516b45c1bf251c25ece469f0"],["/images/Inked组合逻辑设计15_LI.jpg","1da4e28a4cd3fc4c11e7ab716709c210"],["/images/PE文件1.jpg","9f673b828bd69f07e1a3c646ecd4367c"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/RNN8.jpg","d0a7f6b9ccef6c87b259b60e8af4cfed"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/javascript1.png","dd3499b8d6e5e01904c1e8b3f50e45aa"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/java集合_列表_队列_映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-19.png","c944df9f2f13e0cab40c3c2e64bbaff6"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-20.png","e150eef87d8433c63edc61fa43d1f981"],["/images/pasted-21.png","f22837165193588f27a249a02eea4524"],["/images/pasted-22.png","73dd827209b5bc51cbdaf6be23e073d1"],["/images/pasted-23.png","3858fa45b7a7c0f6c41e238dae035da9"],["/images/pasted-24.png","12dce347bf4f7677e495cde27b048c89"],["/images/pasted-25.png","22416169052b69aa6bd62720d0d8d3a2"],["/images/pasted-26.png","f1a8c482811b2e822841100f69681455"],["/images/pasted-27.png","17984ab0385473e02430061c5832fc19"],["/images/pasted-28.png","44e682ad4bfbf2b20343ce55ed877d8a"],["/images/pasted-29.png","a60a4fc7812f20078e4e6b5bb6b07721"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-30.png","ee101ea21972b3ab71b3e8cbd62fedcd"],["/images/pasted-31.png","4759294af3a90a1a857124f247a4d777"],["/images/pasted-32.png","805ca0a1863b73f5ed92f042c12df61a"],["/images/pasted-33.png","730864390853bf56ccb93a40adf61026"],["/images/pasted-34.png","7a49f9e559140600426520aeb28ec206"],["/images/pasted-35.png","29c1357596235d6bfd7f42bd809d7e39"],["/images/pasted-36.png","f84229b3658edd6fbc1054af9f409cd7"],["/images/pasted-37.png","bcd95f06c4879b597118a2eef82a63b3"],["/images/pasted-38.png","869d087e64b3af39a3782c82263f2ab3"],["/images/pasted-39.png","163762097154056aef2aab69be0cb57f"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-40.png","ef974e633e6529c0fef054ba0040e62f"],["/images/pasted-41.png","91c939f5991ecdf3981be7af94d4403f"],["/images/pasted-42.png","29b1481876fbe1b1326095fd092a98ad"],["/images/pasted-43.png","58b98d4645fcfbb023c2c312ab67d1f1"],["/images/pasted-44.png","086c1d8ff6cde02cfdd23ec81a475da0"],["/images/pasted-45.png","aa7d2deb56c2c3fdbeefc8865c670e81"],["/images/pasted-46.png","0e239518ed6cd922814d0fc70e39ab66"],["/images/pasted-47.png","af0c5ad28140305a6240fbec7c396d4c"],["/images/pasted-48.png","93fcba3560d940d48448135a02dcbb13"],["/images/pasted-49.png","93fcba3560d940d48448135a02dcbb13"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-50.png","4072cb3b9bfa4f91f35539faa74f2c6a"],["/images/pasted-51.png","3a195c159e35be6babd48aac5bf2de2b"],["/images/pasted-52.png","21346633be28fb02dd3d04da0e464d0b"],["/images/pasted-53.png","d522b3a69437b1a6a6eb2a21fc0fe9fe"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/关系数据库模型1.jpg","2b0899e613f5771fc03a5397e513d4de"],["/images/关系数据库模型2.jpg","e41af0d63cba09871ef13f23f87b758c"],["/images/关系数据库模型3.jpg","e908ef253ca12548f359a3cb2206ef68"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/字符串匹配2.png","a2178ecdbd4061940f57c5ad7a3d3a29"],["/images/字符串匹配3.jpg","62ad48f6df4067ac8ba78fae289aec41"],["/images/应用层与HTTP协议3.jpg","9f8dd77e70aa4f6ceb5f6ff52999486c"],["/images/应用层与HTTP协议4.jpg","2d79dee035b8a557b74c312cb88790b7"],["/images/应用层与HTTP协议5.gif","a669d1cf7e5033dd80ff8544273c0f1d"],["/images/应用层与HTTP协议6.jpg","b7dc39f7cc8f5e8fce7625aaf9639726"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/引用层与HTTP协议2.png","87559bf7ba74bffe37c156d4ac8173ec"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/无线网络1.png","8ae03216e1d41f3fa5116ccec5014077"],["/images/无线网络2.jpg","de2fc3016d85c8bcd272dd8bbc91e794"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/组合逻辑电路13.jpg","7faf9b4790ee7c7c34d9ade4baa2b220"],["/images/组合逻辑设计1.jpg","bfe7e1b6ccb75263fb30888483d68101"],["/images/组合逻辑设计10.jpg","052ca3cdf73cdf7c48f6556b59d2f4a1"],["/images/组合逻辑设计11.jpg","eedf7e7aae5c80eb37b78ad557f436ba"],["/images/组合逻辑设计12.jpg","dcdb202455ad340039025a839b592abb"],["/images/组合逻辑设计15.png","0ba1c8f1302cd5d6f449fedcc5c20dc4"],["/images/组合逻辑设计19.png","0e52bc0b16115886ba8de1aa4eec1949"],["/images/组合逻辑设计2.jpg","08d768b88a5013165266a00253dc3e9c"],["/images/组合逻辑设计22.png","d18576769cc62d450b2f0268343c9e93"],["/images/组合逻辑设计3.jpg","b4529ada409ecf161ab2dea9071361b2"],["/images/网络层1.jpg","1d4233d4673b7f420ad697652807a1c4"],["/images/网络层2.png","43ea2f9a0123b16603fda74fe7a129e8"],["/images/网络层3.jpg","cc17d38c80d7e7d2b330af541458d8c4"],["/images/网络层5.jpg","fefce8be7f2ebbac1c7972af1c14edad"],["/images/网络层6.jpg","bed91d30f37c2febf4fd09c2d4b8b2cb"],["/images/网络层7.jpg","4bce5f4cba4e1703e36b6d12fd649574"],["/images/网络层8.jpg","84ba3d5cd61aea680cf20fa55d0cdedd"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/运输层.jpg","5b0a17debdd2b880203ee18d4779c5ad"],["/images/运输层3.jpg","b9a70cc24bc81ccf9f94770936a7dd50"],["/images/运输层4.jpg","67b41ea674abb2d6d422639593c0acbd"],["/images/运输层5.jpg","570ddaa64331a62f84e97fd6dc96d15a"],["/images/逻辑门1.jpg","756745dfdf1368dbdb3f03f308a79e1f"],["/images/逻辑门2.jpg","6f66eb9c805b6a8a53368d6f6a01c218"],["/images/逻辑门3.jpg","7b86be428d777d6a77261aaf98f601e1"],["/images/逻辑门4.jpg","765361cad7db7efe40550d357a1c29ea"],["/images/逻辑门5.jpg","e2f487511c4187e76376444309e87adc"],["/images/逻辑门6.jpg","7addfa1723cba8a5b0799af8ee29f3fb"],["/images/逻辑门7.jpg","7db86a615fdb929ba55aa75172957824"],["/images/逻辑门8.jpg","70f5e2d4b12d871a36e843755204fc03"],["/images/逻辑门9.jpg","e05912c381732bb5e7537d744f599f96"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/链路层1.jpg","2f8c7cb102f9eccf14fcacf870e143f0"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","ccd3f4dc7e1a0ce62fd3f8dd76fded08"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","863bef459e457c3318a632ccbf6b570b"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/page/10/index.html","2863322a08dfa306e2d598be6eb50c36"],["/page/11/index.html","9789310e909e2dbc12bd54217ab0751c"],["/page/12/index.html","e9c5c29db670138ac751d9e630b6a3d8"],["/page/13/index.html","fb9581000fbe83b3692a94b485e8ec4c"],["/page/14/index.html","4926e56630afbd0fde24bbc9861439cb"],["/page/15/index.html","8e2abdca332340f7bb36e08e98630f5d"],["/page/16/index.html","43503f17df62fbb2e0713d1cb7a0abda"],["/page/17/index.html","e3fb69734046dd536a855b66739e1ff2"],["/page/18/index.html","329cfa532dfad3103d2e85cdbf42df22"],["/page/2/index.html","84c3c7b6fdcf54b7f7932818b64b0c8a"],["/page/3/index.html","97fd9fa389175625593a46b386580835"],["/page/4/index.html","b8bdd9053a7c6b24b93d097a3c2b7a42"],["/page/5/index.html","bffc8bc740fb995cfa186ece7bd9459a"],["/page/6/index.html","92688bf0d22467f3c19b6d42de68141b"],["/page/7/index.html","4b44810178e6ea7c5edef826c6a6208f"],["/page/8/index.html","a9271158e82c1826f98c18143981c49c"],["/page/9/index.html","0764d61e877ddf4f9b3820cffd4f7d30"],["/post/10919.html","a6b69fd855dcad18de3d7015bbfab21c"],["/post/11051.html","c3beeff38c3649dde60e8fa8207b9484"],["/post/11306.html","69f480f1bc9a2f90ffeb4cbefdc73f70"],["/post/11491.html","572c3448d79507d04c622244245f901f"],["/post/11799.html","dc60932e57e8206b137f017458b1efd6"],["/post/12334.html","5ef47f2081fa86709a210a1d2609707d"],["/post/1326.html","e42e629e04530b0c4196c6ede8234d16"],["/post/14379.html","70373e8308fd22076bca9d5dad323263"],["/post/14511.html","1e62a0b28ce7fc2d9a77e8aa1f702622"],["/post/15201.html","4f8692dd272347369b0f7997262fdcbc"],["/post/15425.html","fddd1c5a8e083158a4eecc0e4a7e0e02"],["/post/16107.html","b78c3c5cca04475321cdb8910850c0fb"],["/post/16e2846c.html","59aaf71ad7855979a80c65cb54636a18"],["/post/17862176.html","a7e6cbc28572d831f4597dde1469242d"],["/post/18431.html","618c414dec001190fcc144ce2b4f023d"],["/post/18912.html","1a8378c6b3b1e8912577f97fff876c3a"],["/post/1b9c8662.html","495d01f8594ca32a5a0eaba8631d6164"],["/post/20198.html","1903556f62ae204c5a9a5bf8a2a6a788"],["/post/20ff5ccb.html","141c0caef7ce7fbde840f7ac52c36b26"],["/post/21624.html","4871508f76b6a552824393d39b522877"],["/post/2170659a.html","f6823a9c8d4d81a740c08b716a8f2a42"],["/post/22102.html","13bc2878d7749df2370a30c5c12219eb"],["/post/22493.html","5263d1470a57b75581266f0a324cf8ce"],["/post/235252ea.html","e144f67d06b05bbffd9853c2b8962db1"],["/post/25699.html","8fea635493cca4d01de24e8215e1f4bb"],["/post/2647.html","2f66275fb2fe4169c21b88f16a84a7dc"],["/post/26477.html","1612dd902b0911857c42d9395b87b793"],["/post/26671.html","d91fb8ff0f367a4dfeeb2a3c172d6ba1"],["/post/26737.html","fa34388cdb2094a34040a27c5c026f4f"],["/post/27045.html","a053a7ac22c6eb3e38ac2ae96bd9b646"],["/post/27621.html","774293cf02aa15fb9288f294a2e7216a"],["/post/27890.html","aa755179ae4768b6af5a1f09d2fae066"],["/post/27980.html","16eade76daac198c68889cd815458160"],["/post/280b588e.html","2d5e9b8d97ef914b14ebbfd0dfcde723"],["/post/28579.html","220ec6ed4d79b2027031113ac9d04c73"],["/post/28877bf.html","24aba31c264ea9ee162227f85e508a77"],["/post/28954.html","3231abc23496b206f92ba2d03b46d51c"],["/post/29378.html","49905116a15161bcd61e06e78749d4ca"],["/post/29949.html","0a4b688d1f9f554e1625d8501782e291"],["/post/2ae43b86.html","cfe14ec543a07970f294a85156c96269"],["/post/2ba82a45.html","6ea2e2a0a43d0ef7258347170fc23ac4"],["/post/2cad8b04.html","7dbc9c951c9bef16bc7f5ef7e915737f"],["/post/30072.html","b2b050e3f9e0b94ec30333cdfae7c288"],["/post/30479.html","62e0b7f2c80dc61072fc1acc519b345c"],["/post/31a6b40.html","ca6ce132dbc4e74abbe7d9ddd886eca4"],["/post/325cdbf2.html","7983e84355fcb1337d4ba3a7102e67bd"],["/post/3319ed9a.html","fc551c8ced265968e5e9f5324a42b3a6"],["/post/3320.html","c5d76c832a841bd84f30875f55a9c82b"],["/post/33cb1151.html","4477c035dce8f5300c1804a60686fff5"],["/post/34811d5f.html","16ac6ab8a8040cc80d30eb7a9d441b2b"],["/post/348d4e04.html","5aa9102b756dbbfd3c23155893f769cd"],["/post/3526.html","5f0055af3d9aaf9f10086233d61e27da"],["/post/35532.html","f0cc3c53f530c54dab0f4d006cdd2f31"],["/post/35848.html","17ee13daa8de617f673daedf0422f787"],["/post/37318.html","4973a801476381d6f7a0f6f0a20b3b90"],["/post/37663.html","80c0a7220b8d25ba263697cd9b60ff16"],["/post/38035.html","6d232b3f961f0468f20eff2051de8dec"],["/post/38072.html","db0139b1497e5d2c8c8aabf860e373ce"],["/post/38145.html","c813455514d189283f82b7d9bb2f7e1a"],["/post/39968.html","1597ced92cd43808c4c2390e34bf6a26"],["/post/3de4bc69.html","fcd560be63dfc7e97714d3193020a681"],["/post/40583.html","34639507face197ab10674c8a7028ef4"],["/post/40997091.html","cdc06b59246cd90473bdf50278a4e669"],["/post/41129.html","06b1fcb684e25d7d8b229a2a5382555f"],["/post/41763.html","608926dc0cbd75d477a3d5a20be98f15"],["/post/41829.html","891371bc7bb35485a549ee40fc5a8c8a"],["/post/41840.html","892b20a9b1813d214fe6b1893b0fbf6f"],["/post/41e39f2b.html","489e4efff9eb94e5d660c7d5d6added5"],["/post/43817.html","9482119dadc4fa03bb06fd451faeed7c"],["/post/43878.html","21b1a3ec4be5057dad301a349daac736"],["/post/44250.html","d56e201f2c050d04c45ba2bdd65d102f"],["/post/44336.html","e4951d2f327e1b750da2617708aee542"],["/post/44454.html","b9467dcde52c5e39a0fadc91d3600731"],["/post/44487.html","b833ac192b85eed1de1dc36efc6a1709"],["/post/44914.html","35aa97facfb9eda5c226e04216afe4d7"],["/post/4551c130.html","3a6a08ce56dcbd7b4b6e68099bc5a7db"],["/post/455a4c92.html","750ba6e614eff8b4f633d7e7a5a218dc"],["/post/46390b34.html","eda78ab27275cd25c1a93c75324552f8"],["/post/46466.html","676d751c6bd22365be25301aacedc14d"],["/post/46925.html","5dcfaed74242a846af254c4166d811d5"],["/post/47075.html","94f7e9d16003f5e1e0b2612783274486"],["/post/48220.html","ed674f4ede77c79642d7027f9bb5f5d9"],["/post/4b1879e3.html","46106404a550891fd1a470112b662b50"],["/post/4c720881.html","f91e2aab37d36da02e9962acd7ec1b15"],["/post/4f4fc0a1.html","e0eaacd4ac120e1c57c10d1937e7767b"],["/post/50daec4.html","2ff78ad2b5090ad5b06ba55dce2c2986"],["/post/51491.html","7d382804f4d9206c663e6d2f16ab1927"],["/post/51e63dcf.html","41018062d1aa5b3b0e84c26b819ecf5f"],["/post/52078.html","83b9a374285361510aa4bd8f270065fe"],["/post/53677394.html","75a6b7378e03d2113bcd4e7d62a56d1e"],["/post/54300.html","2a7fa701c168d2fe1d1e765aa30b85f8"],["/post/54612.html","99432e2b9eac5edd134d07404920fcfe"],["/post/54613.html","57610fccf44a318c522068ceb0f9e774"],["/post/54708.html","340e3609b08c0df5665483311ba89240"],["/post/54778.html","cc14678150277d2332aa2dc78aeb1400"],["/post/5490.html","889437607b8be7088b4a34e3f3d9acdd"],["/post/55046.html","84da5fb754f2a5714c9c8bd6231a9a6a"],["/post/56929.html","7bdb7636dde2004f740028e97914a7bd"],["/post/57339.html","0dbaea8e0aa95fcd056ef37c3fa31662"],["/post/57449.html","5e9890f68f1b79ea6ec0753dcb98b5ac"],["/post/57453.html","474a4438d345f2522aacf645c49ef1be"],["/post/57671.html","456d35ed63ca45a4749392a05807ccb5"],["/post/58313.html","40ecf9016ea5684b790e31af1e52269a"],["/post/58481.html","16712d708fe12ce04748e73f03b3df84"],["/post/58986.html","098ea203ed3fc7e401fd162ce77d8e09"],["/post/59431.html","67d345f53df4e286d9934fb1d42d7cac"],["/post/5951da65.html","997acc9399d55bcc8d149fed7550ce3f"],["/post/5be7e977.html","11553ab0105bd588d22c4e9e93ce216f"],["/post/5f9e4eff.html","b59a10b4a3e7ce5fac647763fbf8f9bb"],["/post/604b49d0.html","1a463bf99fdd55adf8caaa5ea92d8b9b"],["/post/61312.html","4e76c128f7ff876515203c99e408a8b5"],["/post/61738.html","8f9b252a06c7253e3144402388e052c1"],["/post/61809.html","563216748cb97e405855cb1ee5e13589"],["/post/61eaf19a.html","c31ee830ac84c7e1e4a538b078a6478a"],["/post/63002.html","9d71375b0c2a7c5f15493d67cb0ffae7"],["/post/63711.html","701ce06d73725100c3f5f77fbe5200e9"],["/post/6587.html","a4f1cf357aa8b70a62d3c1ff358fa1fc"],["/post/6589.html","c5740586af5ccd3a068cbcbffd9dad66"],["/post/67454659.html","aa61ca8074029ba11bb8fad018587997"],["/post/6880.html","d8c6ff106aa93d5547d7c66d2481c525"],["/post/6ee50502.html","6cc4eed2936b99d31eabbdddcbf32a14"],["/post/70263071.html","f714e0be8e87addc1a1cb527d6ecaa08"],["/post/70d4f4af.html","4a91fe5f29608ab123c775d1f65adeb9"],["/post/71038564.html","d7dd65737d2166e7be1c5c82738d094b"],["/post/7119.html","5ace7395d37c9b9b21a5369cccee0863"],["/post/74e7fdff.html","820e92c6e6550aef86c64cc1c3a52128"],["/post/7502.html","a3e915503f6bb8fac7113fd4b3dd19ef"],["/post/75223936.html","502aeeb9bac49d95bf9a2ccd85dcab1a"],["/post/7564.html","0d255fd3e28fdc9689d2e73544450c34"],["/post/766f9b60.html","8b35e52aa0906a5816be02e31a146d2c"],["/post/769365ef.html","692d89d5034cc5043f8991999ed883c4"],["/post/7ca31f7.html","02d44454801d65c41ae788bb928138ca"],["/post/7d1c86da.html","d7648beb8d743919531546df652679da"],["/post/7f3bcd7f.html","b234711fdd7bba930933ece8c9b3f240"],["/post/8039.html","0e7cd25acba17e97b25a4bb92dac0e78"],["/post/8050.html","ccc1c5c1ae1224c95fe276c37f959565"],["/post/8072.html","d0c5d2bc4e05949b6a0be0f013c7906f"],["/post/8274.html","e1351c42d4d000ab0935d5c07cd63e36"],["/post/8372.html","b62e5ffd1465ead78c209b74a0d6c2ec"],["/post/8498.html","f3aaf3626f8ddffa5c0836788f2f2c2a"],["/post/84ea90f7.html","d09723ea3bc2a960caf87c129d113808"],["/post/85b4e13b.html","7fcc9fdfe22e52f34bca04eb2359e2f6"],["/post/8e75958d.html","ae6510df0d8f9a28ed20fe01861e324b"],["/post/912b2566.html","89e73a6a3eb67241625ce6faf919f465"],["/post/9187.html","8b3571cbf0334726668c01b0e5da8af1"],["/post/9197.html","be3dd68dfa42efa5c7d6720c550dc527"],["/post/94ceb2fd.html","ea0dca4122cf3f096447b08a5bfceac3"],["/post/95495db.html","bcbd910f15119b9484a483889c0f8220"],["/post/97246020.html","b6768d4cf7cddf94a34c7f25be4db84c"],["/post/9954ba8e.html","7ca0e9b7f4a3fbc4d1d75de73d9da2d4"],["/post/9d855db5.html","6a7e3127178dbbae8016bd71715d797e"],["/post/a3a786d6.html","0f723e1906382f990a802b711ceaf555"],["/post/a444b428.html","0e02b248b7c5e2bda9ff563b964d6a6f"],["/post/a50b8908.html","7767e2d470b828ac154acdba89db20e3"],["/post/aa1eade8.html","7761ea7cced49504106e35a1a1540c38"],["/post/ade8c6d6.html","5716ffe9f1b18c22019726aa8e53d08d"],["/post/ae8362df.html","32e9ec7606da59297c693081fb31ee00"],["/post/af3eed3c.html","c55d1e12207ff72b14086411d6ed5951"],["/post/b4c1d206.html","6f294b4b0137b085ba9c437282f259d3"],["/post/b75632a1.html","18e63b5e54cfc6e7777f442b0ee4e40f"],["/post/bcc68732.html","2660f8dc8bf46f43ce3db90a8292f59a"],["/post/bd608ff7.html","6c0032e01b6026196f87e6b1fd7059af"],["/post/c82a1c99.html","37493cde508589db17548fba537eaf4b"],["/post/d213fc7f.html","a14fc86304815cf5d1f828c6076c6d06"],["/post/d431fab4.html","6fd3c451321f37156fadbdaa1b2ed62e"],["/post/d5381517.html","9496cf944979e15f7ac3b1ac088373f0"],["/post/d94f88de.html","d5080a54ef35cd498965cfb69595305d"],["/post/e058ffd8.html","eb6a279c05fa355135fbe266d8ecbbb6"],["/post/e0f8cb74.html","7159dec99b7719bb41eabc3025976eb9"],["/post/eefe591f.html","d402747e9f1d0fae487f0b8166961e03"],["/post/ef296a07.html","a226c621788e683b66a3ab924d593579"],["/post/ef3a3fcc.html","91dc36368423ee45a200c8b5298782a4"],["/post/f201f9fd.html","1ffa8abc9b71408cf364277dcb70eb83"],["/post/f79e4123.html","93e59c2127e5550143c3f7e76b7777aa"],["/post/f8648a1d.html","5547b24f4c06e66a0b8ac7c8d460091c"],["/post/f89cb603.html","e4a340cd4521eaeda75631b837a6face"],["/post/fa288682.html","bbe0879b4e9a68c98f96c0b999d467da"],["/post/fb98053e.html","150205a399f14c4121d9782ecd945630"],["/sw-register.js","140558a575c613e05436c9383c06c624"],["/tags/AT-T/index.html","e18da01d1a43aa16d15c80a0e6c99b7c"],["/tags/index.html","c9a47c9b9ba0bb00dfe5d0b552384080"],["/tags/动态规划/index.html","1dc7c3ac5dfa2fdfab466828c7670507"],["/tags/字符串/index.html","952b620d2ea758e95bf4b0497807a7cd"],["/tags/字符常量/index.html","c6c26f6930b4dc4f283206e51d4770a7"],["/tags/快排/index.html","227e8e59fa772a622610cd43603e63bf"],["/tags/排序/index.html","beb3c4455f345a987d577e9c7ace95fc"]];
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
