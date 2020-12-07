/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","05f3c2d1d662071473c6c14ad831dcbf"],["/archives/2019/index.html","49bef4edea35b2ba9f66f55c8aada619"],["/archives/2020/01/index.html","f633f4c3fa0eca180e25e0378b20916f"],["/archives/2020/01/page/2/index.html","3c35bc6c0c8b384d50550bbfe2569ded"],["/archives/2020/01/page/3/index.html","6362f4e4696425c96de564da9f23ce09"],["/archives/2020/01/page/4/index.html","bc10104bc7c595f368bd5b7996eed0a9"],["/archives/2020/01/page/5/index.html","164477e2b8d9e289ea000e6fddb04cf1"],["/archives/2020/01/page/6/index.html","86724d00fdac2c5b8bb979ad83e34479"],["/archives/2020/02/index.html","17ec56d42764b73d9b46ebd6374bc67c"],["/archives/2020/02/page/2/index.html","5b50238dfcb93a15487639ce1e7103bd"],["/archives/2020/02/page/3/index.html","69cc16970aace9f6cc32b202c3afefa9"],["/archives/2020/03/index.html","25f933854d4f65bef7addb1c7f71850d"],["/archives/2020/03/page/2/index.html","dfec91c2795c1e96a81c37d3becf2b38"],["/archives/2020/04/index.html","d3d204a0c2048e8157c58ce567e46701"],["/archives/2020/04/page/2/index.html","3b9abddf7a0c2ea4ce9929005d883746"],["/archives/2020/05/index.html","d8b9019e3eacb65ec2dd436a25e2dfc1"],["/archives/2020/05/page/2/index.html","4bee1c3a8c9e47d0bfcc192e1c1f2bd9"],["/archives/2020/06/index.html","5ebbeabaf5196b846f367c223f028fd7"],["/archives/2020/07/index.html","ed78837dcb28d2dfdadb219fcee2693b"],["/archives/2020/07/page/2/index.html","9db41aa3a7c81fd20240a79d0e55c00c"],["/archives/2020/08/index.html","9c710906b83ad7209f8058a2a87f5148"],["/archives/2020/10/index.html","bc158355015a43ca97babb76505053bc"],["/archives/2020/11/index.html","a91cd9d0010d570b38f08065831a7dcc"],["/archives/2020/12/index.html","717e75798e171d015e8e93ddb54bf376"],["/archives/2020/index.html","65ae5f7d29eae1e25d0d9cff47ed3bb2"],["/archives/2020/page/10/index.html","ac554382a87b98fe49bcced971b5a2fa"],["/archives/2020/page/11/index.html","82b87b17c890940b7cd8a8b284a63cf9"],["/archives/2020/page/12/index.html","1b5784036f803f0229a0616bf5cae377"],["/archives/2020/page/13/index.html","d036ced7fce5c3031d3bb5f5c0f5de8a"],["/archives/2020/page/14/index.html","4e7d798c92d289b74403f02c00931ab9"],["/archives/2020/page/15/index.html","b833d440c8f4fe3afb1f99b126988493"],["/archives/2020/page/16/index.html","fc1f9ca3ac9ea66cb2fe95004857ff51"],["/archives/2020/page/2/index.html","5a8bca780016004dcf02a9fee68f1a36"],["/archives/2020/page/3/index.html","da26254058b3fb160866cdd9e0b8a4a4"],["/archives/2020/page/4/index.html","556e37ffee17b3895fe78f53f6fc81dc"],["/archives/2020/page/5/index.html","e5136bcc1b468344c970462e31abd836"],["/archives/2020/page/6/index.html","2aac95b4621ec194cb9640dabae85965"],["/archives/2020/page/7/index.html","9051b0bf065f32199a3e27edc763809d"],["/archives/2020/page/8/index.html","de3487907898a41a2645803b95b92095"],["/archives/2020/page/9/index.html","806a5681911adf51a306ca37d8d5cde2"],["/archives/index.html","cff9c08c9ef852d61c9b37c22f625772"],["/archives/page/10/index.html","5d99c0eb382dbfecf874d958d192b2f8"],["/archives/page/11/index.html","5e31c45da3c128caa292c70f90c8791e"],["/archives/page/12/index.html","708202b70bbbbe9da2d9e9f0fad0e7e1"],["/archives/page/13/index.html","d2fe02cd5475b6c1771afe254cf40198"],["/archives/page/14/index.html","602a721372492e0abbe5889e3dc9af8d"],["/archives/page/15/index.html","9527f5092d77419279ae2d31eeb016b2"],["/archives/page/16/index.html","a60afbea31a171203367343beee3f283"],["/archives/page/2/index.html","54bc08d1f84ad2935fed3f8ec86053ee"],["/archives/page/3/index.html","ae68e50d1110046db149127e51c6bb29"],["/archives/page/4/index.html","5d2253c63bd89dbba97b294668a49e47"],["/archives/page/5/index.html","3a1d887b2ea029350ba032b2982de2fc"],["/archives/page/6/index.html","86bbb336ac087e96daeded7b8f594576"],["/archives/page/7/index.html","ce2db8a8f74eeb5a5ed0dc7ec163e9ee"],["/archives/page/8/index.html","004d5f6650205c0faccbc567e6076838"],["/archives/page/9/index.html","47d5c9367b5f52b4090cf545c5280bf1"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","00a6f1f76145a77adc6e11c33f6d7e52"],["/categories/Linux/page/2/index.html","95912731c90677c875018fd3dcac0467"],["/categories/Python/index.html","847c2a74ad410a320e06f2627bd877ea"],["/categories/c/index.html","0894617c2b28287756c16a7cad016c90"],["/categories/index.html","ee7609bdb15cca2ba37ba5a054381334"],["/categories/java/index.html","422a172a66730f1daa29b4a4ef0d6ed4"],["/categories/java/page/2/index.html","21d60cad7f4ec9596595ded24e5f5527"],["/categories/java/page/3/index.html","d1e097236247e9f5b92627c97b122c7d"],["/categories/next/index.html","66fbd23d74a1ef84b166487c365cd97b"],["/categories/stl/index.html","0e70a3235b785f44b4b081c4cd739b80"],["/categories/windows/index.html","86134e896d556c1e5fd5a529c4bcbfc0"],["/categories/基础/c/index.html","419d035302962715c54f174d5a7d98cc"],["/categories/基础/index.html","e8065a1cd1aeffb74998a18e976c9cc8"],["/categories/基础/page/2/index.html","c16c05df2b2032206735e8673e3c00cc"],["/categories/数学/index.html","bb60701b625c76ecfb5543930a9330c5"],["/categories/数学/概率论/index.html","1edf88015c4de938be965d7ad03ab3be"],["/categories/数据结构/index.html","d4339f3eb29b67c869aaaae37ac156ce"],["/categories/数据结构/算法/index.html","12f0455d94d8a99471fa09d4809e1b94"],["/categories/机器学习/index.html","cfb12c1126db51063b48fe3c71971734"],["/categories/汇编/AT-T/index.html","078d523ade4d397d8212ff4f98f815ce"],["/categories/汇编/index.html","ad6aed6c7833b5a29dad269ead6577f5"],["/categories/汇编/page/2/index.html","ee97042f3b819da5bd37089cf98dc4e7"],["/categories/汇编/page/3/index.html","9a20200f435734bb3b4b36d8adde09a9"],["/categories/算法/index.html","380a857047c495aa396f7e52e96de099"],["/categories/算法/page/2/index.html","f587d294af80827109e4927f2907afd5"],["/categories/计算机系统基础/index.html","52fc20108bcd7160f62dad82fecffb6e"],["/css/background.css","39b1b22e2903e556913dc52516e1e7de"],["/css/index.css","81540c084fb756b1a9f1bb2b6a0e134b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","f2746186a97bf38bbd829566be7f6666"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","c639bd4fe0a3f3a3fdebea125f4b2700"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","ed81f89d536dc8e61f1155e2153376d3"],["/page/11/index.html","68624c92027ca49915d17d672999b0dd"],["/page/12/index.html","2bbd0fd0a278e10f6f866efbf407fa76"],["/page/13/index.html","fd18715a9eca1f825a80f674700c4391"],["/page/14/index.html","2f344b4a8261870f2df09eca3edb34a1"],["/page/15/index.html","ac8a6fe1d5532f14a893287ca5e7905d"],["/page/16/index.html","c6556c77fb8627e3ab099389cb72c240"],["/page/2/index.html","604fae9f5130cb86a0686708d14c9263"],["/page/3/index.html","01dc32c07bdb25ed7ec025468410f035"],["/page/4/index.html","4a78a500dae34553a7d3ee2ed44c1eed"],["/page/5/index.html","87107fd3021054e8595d1b10886c1085"],["/page/6/index.html","207d8c26b5a01db3004f32d8aad383f6"],["/page/7/index.html","f6b931da4409f8e6d6a9a4374934a814"],["/page/8/index.html","738c8e410f24a03c2b1ae9c622676427"],["/page/9/index.html","b46eab3482c4e2dc55d5d71d3d5268e8"],["/post/10919.html","bb4d3deb1ca9012aa0b82f721e134c79"],["/post/11051.html","510932757d6019dd9b391d8ce34ce00e"],["/post/11306.html","bdd240e0fe01ac65d765c7ea5a8a55bb"],["/post/11491.html","3305bcfc0fd57418b6239220699b9e37"],["/post/11799.html","385ecf7635574d34bb8d5ea0b960b563"],["/post/12334.html","d22b14baa4603715db4307948109f143"],["/post/1326.html","bda47ed477b80ee116789cf6b1642b8e"],["/post/14379.html","57527a53efc999401b65bf2bf0a4010c"],["/post/14511.html","21ba5da3c8050ef40fc732ad48b19ec5"],["/post/15201.html","78af5cacf9241135e71e97f825fec2a1"],["/post/15425.html","2bf0d6dd35df10ef7d3de40b0f47bdee"],["/post/16107.html","22e71d97e0ea62225e4f005360122c81"],["/post/17862176.html","47159e21c8adca1c2d5a4ffcbb9859ac"],["/post/18431.html","62cf5c8581d62c8908b1928bc39e3774"],["/post/18912.html","a0f2bb786b6a5142ab29f22b4e94707a"],["/post/1b9c8662.html","5a9974c4459dcc13d5fe4c523f8bb779"],["/post/20198.html","dab955aa437a0e2d1350b3dd86db5a24"],["/post/20ff5ccb.html","0c7ae06f578930ea01388cba1c10cb13"],["/post/21624.html","9daee15586f730e451e472d17b6e9f47"],["/post/2170659a.html","69209c62af265804d420c22bf1dffe25"],["/post/22102.html","49a37c9940bb36515c3e0a219de43165"],["/post/22493.html","9b8f29afe4f69cbcb05b328cdeb0aaee"],["/post/235252ea.html","8861b2b35e678ef75f52f64bd248f41b"],["/post/25699.html","60ca09bbb3b4c0b561e9bf58865d58e4"],["/post/2647.html","d0aaebc1d5b82fe69457034a68b92830"],["/post/26477.html","c1b5ac4f6636c2f07ceecf8c26d23b9e"],["/post/26671.html","45c67c2cb2aea1aa06e164a8db39deae"],["/post/26737.html","b00b6e8f8f781710cb14795bbccf439b"],["/post/27045.html","1eb9cd82254ff25b97e7e128ca503d35"],["/post/27621.html","8a0adf08b10142e1880bcc1ea513082d"],["/post/27890.html","1119091dd6acbce95b9ed01b0ae1ca8e"],["/post/27980.html","290826c728fe039a42e3469b576b7360"],["/post/280b588e.html","998e746c8a28ff29b8bdbad5b43d5508"],["/post/28579.html","dfea94624bc97a7077f185141899ac8d"],["/post/28877bf.html","e9658b41c9bfe3f78a61d3cfc6c8044e"],["/post/28954.html","d606de3d3e5e8317cac55fc13b9f4f13"],["/post/29378.html","e418e73d5629200fd7a31250ce73e241"],["/post/29949.html","8fcd2eb82a0cad47286de44d21ac560a"],["/post/2ae43b86.html","35c949bc91e6c8ee3ac98475517d3b36"],["/post/2ba82a45.html","bb7ba53f8c3026d85ef6f71d201ef815"],["/post/30072.html","a72ff894f1b3c41d6a3c7dacd99e0346"],["/post/30479.html","47a02c5fa4b1bf5625db1ed5abcd85e2"],["/post/31a6b40.html","99eaf87523a71a72974ad74bc58c5aff"],["/post/325cdbf2.html","ae79c7bdd1ee3490e976df515f578529"],["/post/3319ed9a.html","7afc6418feed97d562c5b75f0bf038dc"],["/post/3320.html","4cac48656775981de6db7bdd41f1a5a6"],["/post/33cb1151.html","76087d856adb38d09f9c7cb8279cd2bc"],["/post/348d4e04.html","2a4b80942d9313eece5546642c948a1f"],["/post/3526.html","2ea0a6e9d23829664c17bb0cf0f25dc4"],["/post/35532.html","d6eb7b6aba2e7c3b7ba06c60be1e7f50"],["/post/35848.html","82f500b259e149a9898f183df4c060a8"],["/post/37318.html","47114dbef70bf7bbd3e034e0627bef24"],["/post/37663.html","4c0fdb715ad4179b085078804dd35c6a"],["/post/38035.html","e78249058a79821d443f06dad31dfd15"],["/post/38072.html","27977e51b1559536daf51f4a104f79ae"],["/post/38145.html","66ca5c8501426d5d44e4a29dcc80689c"],["/post/39968.html","ae72e57b98c2804209cafe34e29b8fc9"],["/post/3de4bc69.html","970fbf0c865ea16c3896fe993232f02d"],["/post/40583.html","8bc35931274f295ffe2c298327f5f2f1"],["/post/40997091.html","486ffb940b26f4c29471fb56f0954d4b"],["/post/41129.html","fbcc08112e83e8d7d5e74fb1b1431345"],["/post/41763.html","fcabc158ba5630c7ed9f1152551a0e54"],["/post/41829.html","5e3c7d894c5a9088ae897906b1cd303a"],["/post/41840.html","48f2c33a1b6f76e6028648bd8469bcca"],["/post/43817.html","7bc21c07c5c9a50acda42392e3bae97a"],["/post/43878.html","cecc245601c00ab6d734ebd057d0761c"],["/post/44250.html","aab317ad24d2056bca0efc5691101423"],["/post/44336.html","8ab3014c50236ac3134e3945c48dca05"],["/post/44454.html","cebc72bfa07860c24938a6fde6d6e56f"],["/post/44487.html","e9b6a4db81a88ba26ebb8b65e9b9812b"],["/post/44914.html","187e7c47f03862b128d68aa6daf06d76"],["/post/4551c130.html","f50738769514e9755e78c34f4f194dd7"],["/post/455a4c92.html","9f17743e4f04558a95361fa59c2bebf0"],["/post/46466.html","43975fd677f83c626fb1237f45ec41e2"],["/post/46925.html","43487fc24c4ccbc6c2cb4b8ecda12bb1"],["/post/47075.html","9972b468e68722511d54b33e4f8e5978"],["/post/48220.html","345edfcb4836d92e69d30f6d88d126bc"],["/post/4b1879e3.html","876fcb480ff0f8caf831231e77295148"],["/post/4c720881.html","4a06b1d79d6aed73b2f388ce880a6d1f"],["/post/50daec4.html","8401cd469e10214febaf979e8fbfe96a"],["/post/51491.html","32daa00e061e1a1cbc90be442ee2998f"],["/post/51e63dcf.html","6500b41108092e2d42fdff4f5811c514"],["/post/52078.html","54a9037edd063e4f4a42c0ae915ff21e"],["/post/53677394.html","dcd49c60cd17a712d4b6895b130c252e"],["/post/54300.html","84db88c30c6e70853c3bf2b28c447793"],["/post/54612.html","465a8f40878f64616355a045686de946"],["/post/54613.html","49ec20cc7b20abdaa8ed387c8edef7c4"],["/post/54708.html","c6b664ddb541a77284519712239d49a8"],["/post/54778.html","e60436b5c250b8f493ea4b06ce7e4c25"],["/post/5490.html","98ea17957f210337a288c0458fdb0919"],["/post/55046.html","c80ff17c17edeb127d6b9fac440d443b"],["/post/56929.html","50b6b8a8e6bdeee8db818db80b4ef1b5"],["/post/57339.html","3d1bc80c6165268035a1f675abff2a65"],["/post/57449.html","6baa16b125e4dd1dbf0fad5c75b8088c"],["/post/57453.html","1491fd32963a31de913865828f693d90"],["/post/57671.html","6777785090bf49c62cb0ea7bcb4ade59"],["/post/58313.html","fb3c57dd35b41038122473234210a8ef"],["/post/58481.html","42cfb76ed2899832a662e16246fc0e26"],["/post/58986.html","bb3e7b06ed36d89ff47e2f7903db6c85"],["/post/59431.html","56ff582731a6375e07183418023fdc3a"],["/post/5951da65.html","6ca025a1d4721685e4e64b1fcd1a8868"],["/post/5be7e977.html","03c62d76d56d7bb0669cb53d27e0dd17"],["/post/5f9e4eff.html","58b63f86a24b4b3ecc20553d069c0117"],["/post/604b49d0.html","24475e86c02e3bf4d8300461c72acec8"],["/post/61312.html","414774a3cbfeb2c9a0fa6ee29663389a"],["/post/61738.html","7ea1620a5ecb6a026703d42341ab27ae"],["/post/61809.html","aa4234d537899f77502edcda87ce350d"],["/post/61eaf19a.html","55ee8738644ed0c03edc8456400f0371"],["/post/63002.html","2e6a4320cf2c9fd2b905241bbe5cf3b4"],["/post/63711.html","e640f158e8d74b486c4c683cf4114c43"],["/post/6587.html","5c53c94725973a4c66f5443668e0ff0a"],["/post/6589.html","d4969c4e6107bd7ed59ff0494ca7af83"],["/post/6880.html","1c9ba3c306a025ecf8b8a7e5d494218e"],["/post/70263071.html","0659f77cb4e26245f5da60c7c36fd3e4"],["/post/71038564.html","df9bbaa1f4bf9e5e16a807707e251ea7"],["/post/7119.html","85e45bafa90b27c1ffa3c68b381388da"],["/post/74e7fdff.html","afe841cfe594ab2d2d4a2d2960fc12af"],["/post/7502.html","390673a5fb752294b37735df8417f06e"],["/post/7564.html","968e71f6f0c2793d89fbe8a927d61f6a"],["/post/766f9b60.html","50f8b4c77e1d59aa16cd6d1f3481d469"],["/post/7ca31f7.html","2d2717345c596e914c984e1e21a57006"],["/post/7d1c86da.html","6bf0b202b3a00d5230cdaa9fd3272877"],["/post/7f3bcd7f.html","9e3577b07215a90c07c58990fcd18a1e"],["/post/8039.html","263c3188a6ef877c1f43c34b4af16bb5"],["/post/8050.html","6baba03c156eb8d30273a0878ae03f27"],["/post/8072.html","28d1c6c629e2b1426577048e4c0c1b50"],["/post/8274.html","cad5e1a8e5021d74c9943e7fb35a9389"],["/post/8372.html","2549aa5e0a51c9ae0ed43cac1ea7149a"],["/post/8498.html","38f7aaa58ac27e8fe3cbb82098e904fd"],["/post/85b4e13b.html","1eaadd851d3fb36d58923da4b2349be6"],["/post/912b2566.html","790b0904a80cc44de063ec345fc1c90e"],["/post/9187.html","a0c3a268735660918b6b2490e724b4cc"],["/post/9197.html","28e7ab23b6bfc418e538c170fc4cee66"],["/post/94ceb2fd.html","3cb5d3a382fdac5a441285174da217a9"],["/post/95495db.html","6382fa89be16cdf61936bc3b11728813"],["/post/97246020.html","118f2830f02d56666045776fbca0508b"],["/post/a3a786d6.html","5df62ec3220f21cde75f8af8cbb01560"],["/post/a444b428.html","f977eb3040794d4c3ed27ebfc3f42152"],["/post/a50b8908.html","fa68c2b5f30a8bf7eb3c2baa331eed2e"],["/post/aa1eade8.html","d9dce12ef07d8ef7b62c3b48548f34ce"],["/post/ade8c6d6.html","75bbee3209c33fda73058324c6640e8e"],["/post/ae8362df.html","54e5919d09301d9a6651d2c386991946"],["/post/b4c1d206.html","da2ffe4704007e6ab99952d84329ccbe"],["/post/d431fab4.html","6a3558feaecc60da2ce4f78b8a9f03f9"],["/post/d5381517.html","3a6d3a81db583d931403936de823647f"],["/post/e058ffd8.html","e7bccb6a7fce3a32f6eb46b83d68aec5"],["/post/e0f8cb74.html","8a7cab43392c76cae65392a07ae6dde8"],["/post/eefe591f.html","f2ea440e548643b1b09251c0788237dd"],["/post/ef296a07.html","bdb6b29260cfe8b90209863dddef7551"],["/post/f201f9fd.html","a90e1e5decf6b2020223077de35291af"],["/post/f79e4123.html","ce055ab34511321b7d99ef4cbe494ddb"],["/post/f8648a1d.html","9df43a925db160a923e38c855206d758"],["/post/f89cb603.html","89d97fcc8430471f89f328737b92db2f"],["/post/fa288682.html","535fbc3cb41c38ea89230a91b23812f1"],["/sw-register.js","c441e4c4b2bec65b91da6e5feff53427"],["/tags/AT-T/index.html","9b52c2dcbeac9f78d5c4612e7493de30"],["/tags/index.html","5fc159b8bbba22732f124fad643c4619"],["/tags/动态规划/index.html","81ad813008b50a5e3d90d8321461a7b1"],["/tags/字符串/index.html","0550f9bf8b6b5c4763d8037d1fba4c23"],["/tags/字符常量/index.html","ff32f93d3db6416f466938ba351a234f"],["/tags/快排/index.html","a819e73ac8ed9cb1fac958518ea1409e"],["/tags/排序/index.html","9370ea41ab426382547ddf3b590d7b29"]];
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
