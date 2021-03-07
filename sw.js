/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","a76e6a32420ee18f990eb27c159bc4ca"],["/archives/2019/index.html","a14b7419d53fb972ca3e2703697f2d72"],["/archives/2020/01/index.html","27321e465c71c82205a037f40589acb3"],["/archives/2020/01/page/2/index.html","1eb9d043ff465afb96b9dc19f604e69b"],["/archives/2020/01/page/3/index.html","b35b0dd73788869a85fc517eaafa341d"],["/archives/2020/01/page/4/index.html","cc7ab41b099aeccca3a9e7362209cf8d"],["/archives/2020/01/page/5/index.html","52d49e748e22d60ea887cb1aa0032ccd"],["/archives/2020/01/page/6/index.html","07b2e87fd93cd6463d6d61eb2e9caaff"],["/archives/2020/02/index.html","24f800193a9e2b9d9ec28a5992c30cb4"],["/archives/2020/02/page/2/index.html","65fdf1ce21a102558d0844902e2d1bf8"],["/archives/2020/02/page/3/index.html","191bb6459ba1fbfd4c6de4d7a013380f"],["/archives/2020/03/index.html","eedb500fb97f3aa9c7a9ec4184ca1be0"],["/archives/2020/03/page/2/index.html","d88fb7b2c4a577079a0871b4aba9aea9"],["/archives/2020/04/index.html","dd30f1f7e3004d7a99cd5725fbd5996e"],["/archives/2020/04/page/2/index.html","050689f1b2719e6f21f1e47731626b9d"],["/archives/2020/05/index.html","4c9515e4903479efa53d51dc3c7bd692"],["/archives/2020/05/page/2/index.html","335b46b85848ad1337ac020aacd7fd8a"],["/archives/2020/06/index.html","846e421e0061e8d41a411c662920d917"],["/archives/2020/07/index.html","1031c377d36f92061302c94b9f9a7d0e"],["/archives/2020/07/page/2/index.html","8c4ed1888bf1a25939bf9cad2df35db0"],["/archives/2020/08/index.html","5a9b7245342b79841826ab350910e24c"],["/archives/2020/10/index.html","0203940b36568379f951f287446efd70"],["/archives/2020/11/index.html","6531c49d122eef40fd0da9dc0a4bd0af"],["/archives/2020/12/index.html","e4d3d84bbd1a0d7adff1dba14be39862"],["/archives/2020/index.html","76e72a7097907e17db49121f3982a4f3"],["/archives/2020/page/10/index.html","ffd0bc60b48fd2313bd2e570f20c6ffa"],["/archives/2020/page/11/index.html","eb2cf379d3495098ea0496396d07cf16"],["/archives/2020/page/12/index.html","24d109d6e9d611616096cfa06783b315"],["/archives/2020/page/13/index.html","f9d35dc702a8225b03a9b48e5e887a90"],["/archives/2020/page/14/index.html","caf496cb8555fe67a56eb8b157024f7d"],["/archives/2020/page/15/index.html","0e937f9c5ec7806c76a8f13f7b7c3f99"],["/archives/2020/page/16/index.html","94f15d193b4dc7bb443bea61a59e6b48"],["/archives/2020/page/2/index.html","a1c6184f7db8c0ea2cac63a738e202a3"],["/archives/2020/page/3/index.html","581e5f8ccf894a0571137b84fa66b48c"],["/archives/2020/page/4/index.html","d37776284603a937e2f938ebcddfa7d4"],["/archives/2020/page/5/index.html","180300a705f26547a0d2c5301531ef6b"],["/archives/2020/page/6/index.html","ffb8401b2e4b592c08c6911babb021db"],["/archives/2020/page/7/index.html","aad8a6841ea8802c6bd61bdf9600c312"],["/archives/2020/page/8/index.html","266216d98ed641a1dee7121db0e3883b"],["/archives/2020/page/9/index.html","60ed6e77a8039a6cd710a365b6975f61"],["/archives/2021/01/index.html","9a352f7b1b6236e525550494170fd04a"],["/archives/2021/02/index.html","901d7f216641a0c706ee271dc61e9833"],["/archives/2021/03/index.html","7a670b1e01ee1945f4a25980b92da42d"],["/archives/2021/index.html","8215682e5c4532c405052534d219dd39"],["/archives/2021/page/2/index.html","86f4a37dd76d4ef2d75336e17a422580"],["/archives/index.html","55108b30e96a58b4ea90d1a92431d542"],["/archives/page/10/index.html","95258ebcf7c931ff4145df7e7beb9ec2"],["/archives/page/11/index.html","b9d75ffe9521dce8df12299a0e95f092"],["/archives/page/12/index.html","753ef481b06093d5bac9e03222ea991b"],["/archives/page/13/index.html","d42fa76b0ca4589487e7e48cc5320227"],["/archives/page/14/index.html","b90d87c3d3e3d90bc2ee5fc4229733e6"],["/archives/page/15/index.html","b8a74e087105fc80c6e73f276bae6321"],["/archives/page/16/index.html","774742e28216b3c3235d9293120b768e"],["/archives/page/17/index.html","1ff5efafbeaca91ad73bcdeadc8950f8"],["/archives/page/18/index.html","c2157f1c7d71c5b1eded27fa3468d824"],["/archives/page/2/index.html","46c43ff7b369b3196070f545b39f36ef"],["/archives/page/3/index.html","64097858dd52cc854f9d77593b881c26"],["/archives/page/4/index.html","ad009b7a9c40bdbda0d050c4f983cf9f"],["/archives/page/5/index.html","d5b7b535e22ca6f728b262fdb76e7e17"],["/archives/page/6/index.html","8d924a09ad46769b553bbf96ca304349"],["/archives/page/7/index.html","8d4409ca0fcaeb58e5abae033588d8e5"],["/archives/page/8/index.html","0379acbec2f1396b844559d1deac1df9"],["/archives/page/9/index.html","beee9f28f94fc560580f0236ace591e8"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","f43d3588f66ef66cc80f858bb1daf0fb"],["/categories/Linux/page/2/index.html","10e9679f3562bec05c190660d0d4028b"],["/categories/Python/index.html","0429e228e46562695668495a888b2d09"],["/categories/c/index.html","1b735b5a8434a569d8395879530f5e7f"],["/categories/index.html","291143bfc287b54c2692515ac73b9331"],["/categories/java/index.html","83c80642177a82a8a6d35975e4751ef3"],["/categories/java/page/2/index.html","f1e3ef86f3eb057fa704bd208d26ccfa"],["/categories/java/page/3/index.html","66986525d2d049fa8fdeb665df2f5155"],["/categories/js/index.html","5de1f51cace9f71a37a5a14f85b835d9"],["/categories/next/index.html","94141dc77b27fbefd721eca316328918"],["/categories/stl/index.html","129b4cfeac71919bc49bf31f1bde1a6d"],["/categories/windows/index.html","f5bedb1a017b393cc70b8911279ff352"],["/categories/基础/c/index.html","2e2586a1e08e3e98f009baabec313234"],["/categories/基础/index.html","102987c5a1e76abc335d97d6ff684a87"],["/categories/基础/page/2/index.html","67fc4da2ee2d51fe54ef3e8a2d4e07d4"],["/categories/数学/index.html","2c4d641813390aa1d64f6cdf98a54e6d"],["/categories/数学/概率论/index.html","7bceaed76400b1a244555c3a1d4e8e1d"],["/categories/数据库/MySQL/index.html","58a67fec33c6d91a9e53eafc2fbb7c39"],["/categories/数据库/index.html","fa99a3bc64f3b478930a48709a0eb8d3"],["/categories/数据结构/index.html","c8cf61638133d0c6e54f6868ebb5e96b"],["/categories/数据结构/算法/index.html","8976b31524f1f32616b4092536fb4abc"],["/categories/机器学习/index.html","37c96be4dcc16d01a14652bc36af5047"],["/categories/杂项/index.html","2467ca92ba1490202c5579c7ffa83db1"],["/categories/汇编/AT-T/index.html","c50f26e68d247936e7b46a86d55e4267"],["/categories/汇编/index.html","0a8fa43ecfba190bd90e45d7c59ad39a"],["/categories/汇编/page/2/index.html","570cf17e05eaa5d4f724c51b7fb1e4c8"],["/categories/汇编/page/3/index.html","200d3337d383ae08ede5c2cb35ed9ccf"],["/categories/算法/index.html","1e86039ba01c1ac8ed9226424a9ed446"],["/categories/算法/page/2/index.html","a3b6ed83c7ff844fbcfbfc34701c0429"],["/categories/算法/page/3/index.html","411c2f840724694d4e12bc19699c787e"],["/categories/网络/index.html","db3714e888cd416db3691840395856eb"],["/categories/计算机系统基础/index.html","53a5170eec91baf50ffdf1ac3c05401f"],["/categories/计算机系统基础/page/2/index.html","66af6c1621398c5dd8df21133cad11d9"],["/categories/逆向/index.html","441c3e8f134bd17eae0fab6ccbcd7dfb"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","99d2e05805dce9ae2f36041643c299bc"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/HTTP1.jpg","30e1bea7769f2cec34130f180904cf65"],["/images/PE文件1.jpg","9f673b828bd69f07e1a3c646ecd4367c"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/javascript1.png","dd3499b8d6e5e01904c1e8b3f50e45aa"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/关系数据库模型1.jpg","2b0899e613f5771fc03a5397e513d4de"],["/images/关系数据库模型2.jpg","e41af0d63cba09871ef13f23f87b758c"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/字符串匹配2.png","a2178ecdbd4061940f57c5ad7a3d3a29"],["/images/字符串匹配3.jpg","62ad48f6df4067ac8ba78fae289aec41"],["/images/应用层与HTTP协议3.jpg","9f8dd77e70aa4f6ceb5f6ff52999486c"],["/images/应用层与HTTP协议4.jpg","2d79dee035b8a557b74c312cb88790b7"],["/images/应用层与HTTP协议5.gif","a669d1cf7e5033dd80ff8544273c0f1d"],["/images/应用层与HTTP协议6.jpg","b7dc39f7cc8f5e8fce7625aaf9639726"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/引用层与HTTP协议2.png","87559bf7ba74bffe37c156d4ac8173ec"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/无线网络1.png","8ae03216e1d41f3fa5116ccec5014077"],["/images/无线网络2.jpg","de2fc3016d85c8bcd272dd8bbc91e794"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/网络层1.jpg","1d4233d4673b7f420ad697652807a1c4"],["/images/网络层2.png","43ea2f9a0123b16603fda74fe7a129e8"],["/images/网络层3.jpg","cc17d38c80d7e7d2b330af541458d8c4"],["/images/网络层5.jpg","fefce8be7f2ebbac1c7972af1c14edad"],["/images/网络层6.jpg","bed91d30f37c2febf4fd09c2d4b8b2cb"],["/images/网络层7.jpg","4bce5f4cba4e1703e36b6d12fd649574"],["/images/网络层8.jpg","84ba3d5cd61aea680cf20fa55d0cdedd"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/运输层.jpg","5b0a17debdd2b880203ee18d4779c5ad"],["/images/运输层3.jpg","b9a70cc24bc81ccf9f94770936a7dd50"],["/images/运输层4.jpg","67b41ea674abb2d6d422639593c0acbd"],["/images/运输层5.jpg","570ddaa64331a62f84e97fd6dc96d15a"],["/images/逻辑门1.jpg","756745dfdf1368dbdb3f03f308a79e1f"],["/images/逻辑门2.jpg","6f66eb9c805b6a8a53368d6f6a01c218"],["/images/逻辑门3.jpg","7b86be428d777d6a77261aaf98f601e1"],["/images/逻辑门4.jpg","765361cad7db7efe40550d357a1c29ea"],["/images/逻辑门5.jpg","e2f487511c4187e76376444309e87adc"],["/images/逻辑门6.jpg","7addfa1723cba8a5b0799af8ee29f3fb"],["/images/逻辑门7.jpg","7db86a615fdb929ba55aa75172957824"],["/images/逻辑门8.jpg","70f5e2d4b12d871a36e843755204fc03"],["/images/逻辑门9.jpg","e05912c381732bb5e7537d744f599f96"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/链路层1.jpg","2f8c7cb102f9eccf14fcacf870e143f0"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","ccd3f4dc7e1a0ce62fd3f8dd76fded08"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","2b4dd225fe766456b7de97808eca51ac"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/page/10/index.html","6034825526e4914cfa1a5ed503766d77"],["/page/11/index.html","4a3fe5b084df7129caf8c8a4d6a97323"],["/page/12/index.html","3a753486cd5f21c01d9bc506057a06a1"],["/page/13/index.html","de8e751254a8d75b84dbc08ef63c4f4b"],["/page/14/index.html","0b0f04b570eb47572fb6223e9f30567f"],["/page/15/index.html","42fe01d6bc94145328172a519dfd6a92"],["/page/16/index.html","d3d799837b88bea30e69b806f2372475"],["/page/17/index.html","17f88a766e3585e245364305a04efe45"],["/page/18/index.html","424ff24b9b19a7d223d8e3b31ded6c95"],["/page/2/index.html","458f745d47f4f236efe14c7db8ea7898"],["/page/3/index.html","df3c11a5f2bd333a0bddc82e0c56a44a"],["/page/4/index.html","da097c0c229ea8432f25e7b6773a1223"],["/page/5/index.html","4c29ceda09b4d6d97bfeba76c9acc724"],["/page/6/index.html","d28a605dd0a67e35005c9aa563c3c642"],["/page/7/index.html","597401948f9aad1dc2b2d86b69fc265a"],["/page/8/index.html","237069602132d64cb4359329a581ecb1"],["/page/9/index.html","08f48158eeb178168038202e7ea4b4c0"],["/post/10919.html","b985d038440c9a274f331084b099e1f5"],["/post/11051.html","0292b1a5e548aad11f973c36725a9905"],["/post/11306.html","9d71b9862f635eb44c9e996b10113c7a"],["/post/11491.html","14d48f24abb7e225f811fe2a8bfd968b"],["/post/11799.html","b806d4ab015f36cfa5096ca9aebb7804"],["/post/12334.html","f08a0b86b25414c8a29bfea0c82bf3cc"],["/post/1326.html","fd3ed94d98771d01595ca849f56f7cf5"],["/post/14379.html","2d87a33ab7d2c3811add85c2857509b1"],["/post/14511.html","3d47a506f4bd4c3ff9beece18b912ecf"],["/post/15201.html","fc45855065ef5c6bb0da4f3aa6fc51e4"],["/post/15425.html","5c1376d5f00b17c79000062995180d8d"],["/post/16107.html","b8af4302cc8a0ee8ae5c079cda319c1f"],["/post/16e2846c.html","8fdd12586f996fa37aa15644c98f353a"],["/post/17862176.html","9abef3d55052c4a7dae0e1b35f7c768d"],["/post/18431.html","708ba9500d1659f9494642aaadd59dca"],["/post/18912.html","58677798ce9fdeb4270802ba1bd56e1d"],["/post/1b9c8662.html","d598bbd51eea303cb40789acdd827dcf"],["/post/20198.html","62a97650f6c7f13c7644eb1e17403bdb"],["/post/20ff5ccb.html","0d3ff458af2cda09bd9dfb28da00c25e"],["/post/21624.html","266cd70561df436df27c16ad2843a2e5"],["/post/2170659a.html","8673e2cbb8a1fea4757ceabbce4af575"],["/post/22102.html","6e5b7dcb7ff3aa612ecc4c525211f67f"],["/post/22493.html","492cfad9c642da06322927d36eb0ea61"],["/post/235252ea.html","b44e4fa56a44fca1fcb2d691ff3992a2"],["/post/25699.html","c6550f2854bfe55498cd7cef7c21e27b"],["/post/2647.html","231d922a1b9c73a62a2e42522fb15bb4"],["/post/26477.html","15e81dadf1ce0233ebee426de94a35b1"],["/post/26671.html","537dc4f75054f34a261bdc7fa70eb204"],["/post/26737.html","861e3fa1443f3efa196bcb4476c1deff"],["/post/27045.html","7d1470a9ca68a9c34a7b7045dda71153"],["/post/27621.html","95b81b22fd377c96e0b6fed989be0aac"],["/post/27890.html","dc267c5a341450c983ea226fac51d517"],["/post/27980.html","a426ff66ce3d6f99567d3b4d59a83411"],["/post/280b588e.html","2ce7fa9bc0e95f8bd5d6d0f432ad026d"],["/post/28579.html","87296f20f0b2433f47dc0e2eec0a2d3e"],["/post/28877bf.html","4a0f670493103b47fac52b551d283524"],["/post/28954.html","e45ef9ee8ef2b466fd02835a0a73c1b6"],["/post/29378.html","f6d7d5781cf49e252d217046511c3e69"],["/post/29949.html","05a83e6ed13418d3279856b239d73177"],["/post/2ae43b86.html","ef200ab25b553bbf8ecdc78dcf5e0e31"],["/post/2ba82a45.html","ae2e3fcf4f8b4e4afb40ffebb2442eb1"],["/post/2cad8b04.html","e85cd25f2ee603be0df8244c9f22abf2"],["/post/30072.html","81f024ec204d96898efd904b0387e3e6"],["/post/30479.html","f57aa0260aeab03598c34d74bd1aa52d"],["/post/31a6b40.html","709c745fb7fb14692107f0830af72fbc"],["/post/325cdbf2.html","c193537f11be9418443f5e145de26670"],["/post/3319ed9a.html","a2fa9c59b80531a450ead319702a2dd3"],["/post/3320.html","6f93454ad326edaec63ef282403f4f71"],["/post/33cb1151.html","dbea9451b66b1a87ee2d096d7cc18630"],["/post/34811d5f.html","8de18ddf3f6234f1aa0609375f1c1f35"],["/post/348d4e04.html","21acf0679ae739770a8d11bf054d36c5"],["/post/3526.html","01f63488b586194f7bd1c05a7584764f"],["/post/35532.html","db9b4cc5ae2c34d326710490143e0fec"],["/post/35848.html","846995768b2f86843927722eb72edb9d"],["/post/37318.html","88427110538fa3dc2d2cd216a26f2ddd"],["/post/37663.html","eed45269e89ee91815ee7b9940912dff"],["/post/38035.html","9dae6120f33b3cadab586519459aba69"],["/post/38072.html","eeed796aa0c78d700ad00a1f9868be78"],["/post/38145.html","ee8ff66708cffa6436fe59a667b9b59c"],["/post/39968.html","8206ee231add42fcc8181df508d30baa"],["/post/3de4bc69.html","9fb645d09b3085c4a55a7b54745f4637"],["/post/40583.html","b62d9a8a5a5168afab1acb77bc0ebd89"],["/post/40997091.html","fe3b2157a139e7266f5f4273d2f7fe3b"],["/post/41129.html","24a3b38c4c1e846cc24adda673ae84f4"],["/post/41763.html","4d394cf77c82a7ab56f53892de709ad1"],["/post/41829.html","aa85a92572c370016d91cc71ab7c9465"],["/post/41840.html","73bc5eb111daf02d639c8f318245e27b"],["/post/41e39f2b.html","0a591d9a2f29f06b7ad5505c68975442"],["/post/43817.html","32f142907b28575b5cd15d5fd93351fe"],["/post/43878.html","befe70b818dca30584a45e8529ef7f4d"],["/post/44250.html","63ef0dc6181db9f7ccc0b87d4a1a3499"],["/post/44336.html","c58c2f4082fd2a625c76e4ccccf36842"],["/post/44454.html","b56d0e8baa9cb51c0d8acc41850f834b"],["/post/44487.html","3bc1b2560f5a4968de436709b0fcd408"],["/post/44914.html","5ebc73ce9fcf884f7e4934da13619b92"],["/post/4551c130.html","15d9737efaeb5b2cc37dd4e23411620f"],["/post/455a4c92.html","76260e583780fa0cf40f71966373a379"],["/post/46466.html","de2479eed9e0aef30645da648d5db7fd"],["/post/46925.html","a5d39a49aded002a7868eefee93585f7"],["/post/47075.html","73c3e84a5a6c5b80207a5b6ed18223f9"],["/post/48220.html","d1859405c12b821a2e4390d669a49000"],["/post/4b1879e3.html","d3112813e6dbd30dd95fb3e3aa8b2626"],["/post/4c720881.html","2c163ae09e91f6f0356b3f37b047a981"],["/post/4f4fc0a1.html","58b3f78e365e95f55f9257c05ac0f0e9"],["/post/50daec4.html","7469ee742ac5677efd11a32f3f4623b0"],["/post/51491.html","4841a9724789399d10b1bab3c5d84ad8"],["/post/51e63dcf.html","c3c7879c3a45647faf21ce7d3959fa60"],["/post/52078.html","add03ecc2849e47b2869145dc70aef24"],["/post/53677394.html","38c1d585127cd9223b95a99fc783d8af"],["/post/54300.html","9b8311a159a979e595c3592272f74aa6"],["/post/54612.html","8664917fe6b2b06ba0e6aab4ea98330a"],["/post/54613.html","35f52674932aaeb4bf83f52531885de2"],["/post/54708.html","5729e5b2a9c99a90588e044a76e77a9d"],["/post/54778.html","3a1689edecee02eb66d04aee4bcdb887"],["/post/5490.html","08ae018417919ec10f7fe7129fbc1f1b"],["/post/55046.html","af922a0b00cb3fa975e52a85e148fa96"],["/post/56929.html","e0b09e3020702e65a8b1e09cf7ca17c4"],["/post/57339.html","d0337281fc83c6263f48d37a91e5c8bb"],["/post/57449.html","842e3042b1bd5aae74d60d31bd068fc3"],["/post/57453.html","9ccae5d21f935882e07045b600052c9f"],["/post/57671.html","ba41d8d84bdc04b8a80e11233fa7706b"],["/post/58313.html","f93c06fb59ac7d4c3289966b60789f33"],["/post/58481.html","fe583e41b7ce5a81aae0e5c0f387dd21"],["/post/58986.html","b5ec021503ba49edbc2c57d6fbf2ff1d"],["/post/59431.html","ba626dbff32d381d2ac06bf18e16f66b"],["/post/5951da65.html","c0329049603ccb13979e077488b25bf7"],["/post/5be7e977.html","5f03753521e118a5d6a2db61d8098f6d"],["/post/5f9e4eff.html","4b89bed09db0b57d81b669754e79b2c5"],["/post/604b49d0.html","0665845828b8e842f195d547ea6558b1"],["/post/61312.html","16d0fc0a2573887eb943496d650b9b50"],["/post/61738.html","bb86c34f21f800b4cbdb817249dc92e3"],["/post/61809.html","c439c45a51b7712fd9b5e13a46118efc"],["/post/61eaf19a.html","d3cf665809ef6dc47a05565f76f26891"],["/post/63002.html","f8b266287edc090350536aa2165ab8a5"],["/post/63711.html","f56d28357d6221cf62a337fc91536c1a"],["/post/6587.html","e79db5b1f172f1dafd8bd04f42184ec9"],["/post/6589.html","e2b6b10688c1a09117dbe61119425cf9"],["/post/67454659.html","9419bdbc5fa0746a2200213733a17302"],["/post/6880.html","4c938008c312258602afb1e367f2c95c"],["/post/6ee50502.html","61656b5df15d3b399650e9a11c80f6d3"],["/post/70263071.html","9fdcedd5c41ef6ff62707e532c14c50d"],["/post/71038564.html","870901ba1553ffabb3182248babb066e"],["/post/7119.html","77ff23c87b0ef44720a740b725c205c5"],["/post/74e7fdff.html","471152bab78c7557904d38eb9ced918f"],["/post/7502.html","b9a24135d89827b831c006c9b21e047c"],["/post/7564.html","0eb3fbcf7a3ee967e0abb3c1f971e650"],["/post/766f9b60.html","1a51b51bcba0d760d46c5526a771906b"],["/post/769365ef.html","c67080fe5a86f3eb1bf83b906e11d3c7"],["/post/7ca31f7.html","7d2cddc6c814d7c58223c27c27c3c87a"],["/post/7d1c86da.html","86cece01427df2c9679c69665361d6bc"],["/post/7f3bcd7f.html","cfcfc89fd8a21730320b22a94e6556ba"],["/post/8039.html","15291f7331abaeabd8c16b30c5ab15c2"],["/post/8050.html","2fe5083e15a4d835be06438b1c20cc13"],["/post/8072.html","58191648ff945e4c4879041de3252130"],["/post/8274.html","11ebea64692f29bcff7eadbae885dda5"],["/post/8372.html","efe69429b8f8c0d4a13783535fe4ecd1"],["/post/8498.html","f98e393bc6d4e2dbd46d93df3ebc2867"],["/post/84ea90f7.html","5d5b8eac171013fbea01a927fd7cd173"],["/post/85b4e13b.html","62432404c0db331b43d94a390d8a0947"],["/post/912b2566.html","90d8d7b1e42b3a89daec44a9f8df9f14"],["/post/9187.html","c9e9ae57fdec7d548556619aa9984746"],["/post/9197.html","90ca959efe41c51374f7392ee7bd964a"],["/post/94ceb2fd.html","f6503df04600a0b33f32b8d7822fd7d3"],["/post/95495db.html","fae23e45d26a4643f169c82574bf6334"],["/post/97246020.html","e24f7c6769673359d52b66bdb5a08558"],["/post/9954ba8e.html","27b2634037e29615bee9a75ba43aa946"],["/post/9d855db5.html","d02c624e47a0eb068d68d40786473fe7"],["/post/a3a786d6.html","720557652ee13f7d114267447a5abf44"],["/post/a444b428.html","9a5075546331ab975d7c8482e5a72061"],["/post/a50b8908.html","236b687258f142bb8f16a76bce967c1c"],["/post/aa1eade8.html","ed1cb7e92dce0cca5b074aca49aeebba"],["/post/ade8c6d6.html","4beff24a5bbe26bbf83e4b1002852182"],["/post/ae8362df.html","2249bbbdf495bc2e6bb437ba61d95d8d"],["/post/af3eed3c.html","df7bcc7b74ebde988b4a14f6b79f0ea7"],["/post/b4c1d206.html","e6a94a694049adfb6aebc6276fc54e6d"],["/post/bcc68732.html","d3617cdb25b1e76c5fa5c339caf9c6ab"],["/post/bd608ff7.html","7c02676ebb1c3517ab2f19012c499a7a"],["/post/c82a1c99.html","0f9f7ce81bbde78b978040a3c7f355cb"],["/post/d213fc7f.html","49e65e7af600ac8053ea7902dab9df1e"],["/post/d431fab4.html","cdbae053d5c7e0f1398cb07c89910af4"],["/post/d5381517.html","ec165c9c931553091e70418ded540545"],["/post/d94f88de.html","e918b4e46f396f5c91768bff148cec80"],["/post/e058ffd8.html","4dc1a52bba1298b850da0c67b76596ed"],["/post/e0f8cb74.html","b8c2b5ed63255d657661dab7957ad5b3"],["/post/eefe591f.html","0bc307b19d5e92b7030e4d32f2fd01d1"],["/post/ef296a07.html","b472407a7135aaaac7c844de4e6e81aa"],["/post/ef3a3fcc.html","929e29da6e56d32fd9797679822880e6"],["/post/f201f9fd.html","28f9add1e7e5175d8c38bb8c3b6679c1"],["/post/f79e4123.html","8c4722753b5e5418055c3e8cc95dba71"],["/post/f8648a1d.html","61149ed21dee06a02b175480c146237c"],["/post/f89cb603.html","c3176cabbe07107e20f89208593f8f11"],["/post/fa288682.html","6f390a3df10ed9bb4daf0e00dcd85bef"],["/post/fb98053e.html","09e910e4d31d225f948b41c8d5ccfdb6"],["/sw-register.js","298b4e700a35e31c3bee9a5794419e6d"],["/tags/AT-T/index.html","52eb3c4dfa0af8b3139b7ffdc00b1b99"],["/tags/index.html","d1106a8e78e7082c0be04820e6a8e4bd"],["/tags/动态规划/index.html","73f2b01b1f319df702cf266d23d6e909"],["/tags/字符串/index.html","6cd9e9db2c640e5487c244a14d7f5857"],["/tags/字符常量/index.html","74429804b67baa0457058925f2045b1a"],["/tags/快排/index.html","89a1cf10eb0656b82af14f7028cf4287"],["/tags/排序/index.html","d5bd56605dd63e5cf1ccc690e5e7b5f2"]];
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
