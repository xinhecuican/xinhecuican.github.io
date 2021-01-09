/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","0a1a8795f170bc60127d39766525520b"],["/archives/2019/index.html","d23cc23f09a292a83b1b11bfc8a101a3"],["/archives/2020/01/index.html","6db4c85a7fe409c6efbf6a1b0e496730"],["/archives/2020/01/page/2/index.html","cfeb11960216e134b1b52d7ad5846ef5"],["/archives/2020/01/page/3/index.html","146ee9994a6417a410fdfa926f1a49b9"],["/archives/2020/01/page/4/index.html","449feba2806dff87ee05d1eefd408f01"],["/archives/2020/01/page/5/index.html","d99a6b278fcb8419582d77740d1e1f7a"],["/archives/2020/01/page/6/index.html","d41853c0738510450402976153752ad3"],["/archives/2020/02/index.html","58ce760d0501c3c932d41111bff06422"],["/archives/2020/02/page/2/index.html","f6537f87a7f952ff4f808d4619cd99ea"],["/archives/2020/02/page/3/index.html","0d72341cb8c370fa50e4c65c217c7822"],["/archives/2020/03/index.html","f38c7bb660b64071d6ed45f79ae92bef"],["/archives/2020/03/page/2/index.html","69fc852863dc8435d44d093466e67f20"],["/archives/2020/04/index.html","c3fd197269c791ed7a71f6cba14cca96"],["/archives/2020/04/page/2/index.html","208724cdddbc2bf1261c21ebfa457056"],["/archives/2020/05/index.html","90e0fa677fbe9cf05f5a24a4d092ca8b"],["/archives/2020/05/page/2/index.html","9d8c651fda05a856a7fba39229d17a0b"],["/archives/2020/06/index.html","88e701041e2f02b211c3ef8af9604713"],["/archives/2020/07/index.html","749b672cd5bb8977578c82135c6a9bdd"],["/archives/2020/07/page/2/index.html","0015ffa6f20cc52531511ac3f017523e"],["/archives/2020/08/index.html","f8b16b803c3e35d130e4ede2c8b210ae"],["/archives/2020/10/index.html","4ae267e09452c594d2fa1f1af7f664f1"],["/archives/2020/11/index.html","9b3fa62dff0f562e8a2410a8badf6749"],["/archives/2020/12/index.html","4cd27c2c503f92a05f002e67067231af"],["/archives/2020/index.html","97b827232bf94bf3963ff421cf734c18"],["/archives/2020/page/10/index.html","6b531305369336928dcf6eefc4a43adc"],["/archives/2020/page/11/index.html","957befea9aac0aa0e06c7dc0efae33f0"],["/archives/2020/page/12/index.html","266dfedfba04261d86119dc2f398ec6d"],["/archives/2020/page/13/index.html","5f55851660a7ad6cf5db10162fc914fc"],["/archives/2020/page/14/index.html","8614f3813f4c830124bdbe937463c3a1"],["/archives/2020/page/15/index.html","43261896a88be36949a20b0236bfd223"],["/archives/2020/page/16/index.html","5a824680be059625ba44e6524f99e3d1"],["/archives/2020/page/2/index.html","6a1f932531ada9d67fcc9aa9a57d5a5e"],["/archives/2020/page/3/index.html","ca39e1b5d23a470f3f5b9405e559427a"],["/archives/2020/page/4/index.html","b15ce429d1149c2aa83217971bcd0c10"],["/archives/2020/page/5/index.html","93c1b58b787f233ee3c292c0463448d7"],["/archives/2020/page/6/index.html","7b3717099390e174875e857a2fb84b21"],["/archives/2020/page/7/index.html","f6787eb5a84ed9d85c1707dea9305466"],["/archives/2020/page/8/index.html","cdb15567bdad6bac08a97f3ed21044e4"],["/archives/2020/page/9/index.html","003a90bdb513a9f00319f6b03fb57357"],["/archives/2021/01/index.html","9c866aa0fb670ea6bf1b28cc6409229a"],["/archives/2021/index.html","cde5e58390527b2bd136d9eb5538b6d5"],["/archives/index.html","12e2baadd1e1a0a55a90a7f9710d96e6"],["/archives/page/10/index.html","30ec6904cee2f20d960d379568502b13"],["/archives/page/11/index.html","7027d9b4e7909de5d8f217e25f5c0364"],["/archives/page/12/index.html","8f7dc83315e17cbcf28b439642fe2bba"],["/archives/page/13/index.html","fa422cb4c8b5d26e619eabcc4431646b"],["/archives/page/14/index.html","3ea83ebf4a7d9c41660d281f4e89eef4"],["/archives/page/15/index.html","cf0e471a3f6c2eb1f521a72ac94f353b"],["/archives/page/16/index.html","7fff43f40edb5f1c4fd76ac2071e064b"],["/archives/page/17/index.html","d7fd51731074c4258c35ff33dc98921e"],["/archives/page/2/index.html","0b59477e871a8280dd7bf5c8f852fabb"],["/archives/page/3/index.html","8e919579ecbee70baa08c4c037a9f0a3"],["/archives/page/4/index.html","04ee4c58cf92f21238004b933f09de0e"],["/archives/page/5/index.html","e6b6a785253a0b89226f40a0a5bcdebb"],["/archives/page/6/index.html","233a48c29a67e8e3f7c3745669a6aef7"],["/archives/page/7/index.html","37be811387e512665f9d24c4647ea81c"],["/archives/page/8/index.html","0e807a622d37c58c08590aa1b2085676"],["/archives/page/9/index.html","9dd9d2f91f09167415291a542a0dea0e"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","6d130bcdf174c2744c81b3d1e1ee1659"],["/categories/Linux/page/2/index.html","6700b19959dc2752502ad76cb1e91fca"],["/categories/MySQL/index.html","f9cc9ebc7c76925458db1cf49107d47c"],["/categories/Python/index.html","2a5272295083e3b59cd4fa53209f0348"],["/categories/c/index.html","cecc9e41728c937c79afade50db17768"],["/categories/index.html","081a1d36ae4ccfcb43f9a56321df4d9d"],["/categories/java/index.html","a0d61ecf5cb13a57f0b0c0d3b1adef78"],["/categories/java/page/2/index.html","38a3ced7ebc7c2e8a70768e0471e33f3"],["/categories/java/page/3/index.html","5cfd2fb6099f2820638db24eb62e2f6b"],["/categories/next/index.html","dffca37cb047cc36751cc382a09fb33b"],["/categories/stl/index.html","1496d53902a477560fb0150168121c18"],["/categories/windows/index.html","6e66006d88ee048211b9218e42a163ac"],["/categories/基础/c/index.html","2468670a9a1055171f446d29266bf35e"],["/categories/基础/index.html","993c5a8de1cc561b715b097773b34ad6"],["/categories/基础/page/2/index.html","25ca9956a1a5441173de7875920413aa"],["/categories/数学/index.html","6d3795957708ac93f89d42efdb73e4b3"],["/categories/数学/概率论/index.html","7c9ff3d9be28bb553184e2488a5dd779"],["/categories/数据结构/index.html","ef40a3cb5efa9fc9cd1573180bbb40cf"],["/categories/数据结构/算法/index.html","6fb5aa0e6122180b9aebe0432ca6fc56"],["/categories/机器学习/index.html","0be530c1fa314e33ddca320e18177cd5"],["/categories/杂项/index.html","51597f4aa3368a891bb2463a96b908a5"],["/categories/汇编/AT-T/index.html","9bc8becb6d60353ed4948da24bd40fb4"],["/categories/汇编/index.html","5cda2421d169289c856f61758e046ef1"],["/categories/汇编/page/2/index.html","ad484a91b3eab516dad708133d22fcb8"],["/categories/汇编/page/3/index.html","0256efc462f0ddc36a8bc7a9ccdab785"],["/categories/算法/index.html","5e6202cd2401d7b9f9220f0cad0d82ac"],["/categories/算法/page/2/index.html","df6ba25e937f7cf3dffaf7db89102a6e"],["/categories/算法/page/3/index.html","dda55747c822a19696da89f1447bfa8d"],["/categories/计算机系统基础/index.html","ec053c030bf8592ffe74b3d5f18bccf4"],["/categories/计算机系统基础/page/2/index.html","29e8fb67c758ca26873c8809ba6e6d16"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","589e5d62e0dc2e4c33bd7a4e45456d0a"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","dd653aa4c7ce2e0f9fb9cf6774483b35"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","43506583afd960e111937f53932499b2"],["/page/11/index.html","61a43313278a0a129f6e5aaf035e4d95"],["/page/12/index.html","a145d85258150d19d8af9bdaea7ce671"],["/page/13/index.html","013f57c79cfd7a8b38efb9dff0fd8ab6"],["/page/14/index.html","2b1eb103bc38b481c276bdeca8056c4d"],["/page/15/index.html","317b8d4e44bc55447ff694af77fc068a"],["/page/16/index.html","00f825a1a9a46031081805ea146b2958"],["/page/17/index.html","a571e132c11d7f61b03033e1e234666d"],["/page/2/index.html","666fb83189af7019fa2e73f0808a1cbf"],["/page/3/index.html","17be951c031f94641c33a599c96040a1"],["/page/4/index.html","3d1acfb4fcc0741afcaf3b6f90f30505"],["/page/5/index.html","6e777c2f941a03e1d92adbe8625658cc"],["/page/6/index.html","353e578ffdbc6bbac4072ec314a465fa"],["/page/7/index.html","cb390e89a2eef52380e1e876e26ddf96"],["/page/8/index.html","dee61e679f9df50dd2e64b02d5fcbde0"],["/page/9/index.html","fcee10aa3e6f869556335e7f094d85ea"],["/post/10919.html","2c85b1a4f42f86b93b1c31dc956ee762"],["/post/11051.html","5d836ed6c19163ac71625b3a45a2a457"],["/post/11306.html","fa80542c733cffaeca8c065b07d50beb"],["/post/11491.html","8abcdf89584a62cc21de6190ac41bb1a"],["/post/11799.html","62bc44cbcf6f34f3ae7a048e6517e88d"],["/post/12334.html","6e3fe682d86794c512f4bc09f8be82b0"],["/post/1326.html","02eac900f7b26f111f97f50c6ec3dd41"],["/post/14379.html","6e13f7b453f21fa7e59f649b92cc51bc"],["/post/14511.html","b221f5e6ceceb599150c4817c447fec7"],["/post/15201.html","2ff4a536d80b97b7c1824e14b41f3bf3"],["/post/15425.html","7107abe0221df1e5ae5ea88025ef887a"],["/post/16107.html","a01d0515cf67d02ecf0d4c1649edb47f"],["/post/17862176.html","0b29a24256415e1d07d469ed2ae22e4d"],["/post/18431.html","362986a2fe46fe011c35c155d531f250"],["/post/18912.html","c919649a71f7f3e68f1a27c79912b08e"],["/post/1b9c8662.html","68ca89f3956cf4e6ad3d9dea3478f7d8"],["/post/20198.html","b106e18ff62f393c6c3ef321de4c8a11"],["/post/20ff5ccb.html","01a48b1c5677e14c94231e42f7558e94"],["/post/21624.html","5a8ca479ef482c7ce9bbeee2d96d78c4"],["/post/2170659a.html","f813e1cd7856566c4ed288d0fac26475"],["/post/22102.html","d74971245fcdec3a88d81f56f8b07d78"],["/post/22493.html","854039d2fee483610d93ab167bff5a93"],["/post/235252ea.html","be313ddbc5c5b52a42a0d3094561ac70"],["/post/25699.html","4a9ed36e049fa3c4b7776ed284cd2873"],["/post/2647.html","5f350130a570020b2935a6ec46b6809d"],["/post/26477.html","b810507353737d251ff450e1a8fe8645"],["/post/26671.html","61d9db38c7bc8c3776347089771bdcf8"],["/post/26737.html","a9a3a447bc059a17c0d46f3661cdb5ff"],["/post/27045.html","e8cddc0ee50a4b3b321e1b313edf7a6f"],["/post/27621.html","31d97f13e861c2cda13dddb0d4364d0d"],["/post/27890.html","043a9faf4bd54afaec75f41a8737833e"],["/post/27980.html","0a2c6099a1c0dacb605d7df8933cf25b"],["/post/280b588e.html","8a2f7fc3c67d1822387310038974bd7e"],["/post/28579.html","44c9d99a82cd0d082e653b1b7a63f352"],["/post/28877bf.html","6fe0d1bb370f8e05bf5a4333a406fb52"],["/post/28954.html","b433b110e310de8b39a84da44b5ebb84"],["/post/29378.html","2c71d0646b4533133fdcafdca5650a47"],["/post/29949.html","c56357c3a86fa9999ad5265d3bfa422e"],["/post/2ae43b86.html","026d70e005a51f02968ec7fe247cab5e"],["/post/2ba82a45.html","8102d9dadf2485f2a643c0fc66fd53c4"],["/post/30072.html","4e535fed6518b9979d61bb13c362cc24"],["/post/30479.html","e556a40b61be1d5495b896c9d2d71a85"],["/post/31a6b40.html","d7712cc95f44e7e13e05fcf7dc3d97fa"],["/post/325cdbf2.html","08df48609d8ac9abb4a7adaaf5f1d347"],["/post/3319ed9a.html","c5c86a2b1c6dd3b5b09abad159695e86"],["/post/3320.html","5bdcde7c7108672339471df5cddc8cde"],["/post/33cb1151.html","751a68aebbfaf1bb2244eee7a0e4387b"],["/post/34811d5f.html","19cc72c6600f29361901d64fa4d87fe0"],["/post/348d4e04.html","4d1844b2f685c508825b1b5c3d58763e"],["/post/3526.html","8d8ad7a8edb1812e9f312ce96940b2ea"],["/post/35532.html","304ecee5d22a22ece169e56deadbf488"],["/post/35848.html","c6009814d307e94d54672ff3d4b7ede7"],["/post/37318.html","afb2848605b75de1d8d812a98c06a80f"],["/post/37663.html","20af296175d256fc33d2995d86cdf45f"],["/post/38035.html","1d357f25ae9fa950c68561719568b412"],["/post/38072.html","195682d1990cef130f453629bb893a90"],["/post/38145.html","c43c897709e2c0f40cec70dc618e6697"],["/post/39968.html","3b2c96c44faa537b7b2e49a1379d7f70"],["/post/3de4bc69.html","22a3b9818e07870dac088e6185138151"],["/post/40583.html","954539acb3c04038790e1e3a5aa2b299"],["/post/40997091.html","4cdc7290fbd5643625b2626b9e94b3d9"],["/post/41129.html","a741ceed9ace9dd8c7d8c31a1c165362"],["/post/41763.html","806445e10ecc8ae70909a559b58300fd"],["/post/41829.html","188bac9d371b4c4433f7e0ef7e18ed74"],["/post/41840.html","9c2a5a05bb32e86c9f76cd957e969dc1"],["/post/41e39f2b.html","9f32bcf6144c8ebe5d414eba37213217"],["/post/43817.html","16ead4b7c1eb801d4a719d0f2f7ea8a9"],["/post/43878.html","57ec77453135ee21dac03a8e997854b7"],["/post/44250.html","dbf81862cd31bbc70347d1aef29eb480"],["/post/44336.html","1960e92000dec03de0ff8784c8afe856"],["/post/44454.html","e184a9901ca1d022219c300a05f8b5c6"],["/post/44487.html","4f64a53f5730431059bd3fdf86a7b1f8"],["/post/44914.html","ab3e1de3ef5e55e16e651c1664ff638f"],["/post/4551c130.html","b09f42451f62b5c032956e2c5efa38eb"],["/post/455a4c92.html","0b965470192063bee164441e1996e92a"],["/post/46466.html","8114419c5a69b42edeb5d9f42c7be3dc"],["/post/46925.html","325af39b04f6af264a4e490f491d784b"],["/post/47075.html","42c1d08cbaeaf7a71d0ace799ae77bd0"],["/post/48220.html","8da3a7867f2e7166d583fde349514de4"],["/post/4b1879e3.html","69ede46d08a20981c9240e448e7fc5b8"],["/post/4c720881.html","3ed609ec9a4e94329a939fed494dddc4"],["/post/50daec4.html","d8e670fbb5885fc95e1da53b5e3b7f8c"],["/post/51491.html","42500c7f5e0076963ce5169a57a9ff80"],["/post/51e63dcf.html","36e74bb698ea7ca31d55d0b50dc34165"],["/post/52078.html","9fadafc397b5ff2ba7c0055b8859bab1"],["/post/53677394.html","a535cc0ba49d0a81bd7882789ba65eb0"],["/post/54300.html","8971396655081e27f4402b1acdef52c9"],["/post/54612.html","b22663571afd249cb3aa06d752809aa8"],["/post/54613.html","34dc06756cf807533093948f4eb90577"],["/post/54708.html","2a324e2f521128e0b3527fe2cdfa0170"],["/post/54778.html","b3323da7d057b65c1964df125f377598"],["/post/5490.html","fe7dad0b5b9d87801168a7eb58616c08"],["/post/55046.html","b5503dae932773db5554419cecff41b2"],["/post/56929.html","199131663d243f47509cf6cb313717b8"],["/post/57339.html","d0d2338056fc1bf59702812ddecfe920"],["/post/57449.html","615717d8b4b29aaca4c6a17cdca9769c"],["/post/57453.html","430b52c7258fbb8f83d7d2cec5e9de26"],["/post/57671.html","5891c27a4ad1387533f51aeb4c26d798"],["/post/58313.html","843f693c1bcd6bb28001abd35e612257"],["/post/58481.html","901cd66576db5065fd970cc80675fb9c"],["/post/58986.html","90f110afe1354965bccf3e3dc9743bd8"],["/post/59431.html","3e0876d5d2b580896d249bee53d5a5a1"],["/post/5951da65.html","1dea2cd58a67850b8fb77d8f0c86fe01"],["/post/5be7e977.html","0528723992efe98dcf653cbc93b0c4ce"],["/post/5f9e4eff.html","acacf7b2e24277dc3e309a59a850bae0"],["/post/604b49d0.html","c296154888a5cb21c4c38b8f3d842775"],["/post/61312.html","895341e7d5ecaabbb58de9eed4a2d9a2"],["/post/61738.html","9c13cc326d3ecab3c649d6c0eb8edc83"],["/post/61809.html","cec4972a0bf272aaa436cb6ad2291cb4"],["/post/61eaf19a.html","883b7568cb477889896f197601a21dca"],["/post/63002.html","2d7a1d1c761c238413e826a48e89f321"],["/post/63711.html","0e8e28f79f527b57b9cc396e56c3a748"],["/post/6587.html","08338592affe34cfa8c79f997b402e8a"],["/post/6589.html","6b4239e030e87d9545adc0f93ea86be7"],["/post/6880.html","a1bbf6f741a2bfe517b933a1bf660630"],["/post/70263071.html","9f642c8a0048d139ef0f98a74c5a026e"],["/post/71038564.html","89fa10c66b61e480115f184fb96864be"],["/post/7119.html","121f47e2aca50ce76932e6e7895fe0c0"],["/post/74e7fdff.html","6dd5b9074b3d5d34c593f192fe2cc9c8"],["/post/7502.html","dd22a920ac3f4142a8d1dbf7016e4f86"],["/post/7564.html","6584ccc7d7680c4b2c21f1ea0f80e525"],["/post/766f9b60.html","3a71f15209d48ab0b7fb08289628f703"],["/post/7ca31f7.html","0fbc644c8d2071544e69990cd2569ce7"],["/post/7d1c86da.html","e5b4b69ea671aa1a5c0fa0e74099f124"],["/post/7f3bcd7f.html","541eb75dba978e13a2123549b11cd0f6"],["/post/8039.html","791337fecec638512131e822027711c5"],["/post/8050.html","a4641d85c5142ab22a6d75cce03f1e9c"],["/post/8072.html","1e7b83bf4c9e3fcbfdc67cb534e59f59"],["/post/8274.html","d9e769461196219b9201253d6ef05e20"],["/post/8372.html","209c0cc52de972c797332a4b36fc5184"],["/post/8498.html","17e3e66917feb8cfbd041bd6cd8ac020"],["/post/85b4e13b.html","0e54440a52afab980450579aef7e98f4"],["/post/912b2566.html","02de507d39d3320a7553ebd1ea3b672f"],["/post/9187.html","d40deb6373005a6844ba0620b7ab363a"],["/post/9197.html","b55416b803ea66310acb27a12f779d94"],["/post/94ceb2fd.html","7dbe0a1082c8c5c6cea511445f056917"],["/post/95495db.html","40b7087de903904363577e7f94111ee4"],["/post/97246020.html","7438b4bb917d81ad02f65a4a5dd0db73"],["/post/9954ba8e.html","be2fc169ee7f70001615017fc1603ee0"],["/post/9d855db5.html","847d44ff176c434510078274be23972e"],["/post/a3a786d6.html","80ef0ec4000c640bfed18873c458068d"],["/post/a444b428.html","c8d3c231655deb50b959f127ef07d640"],["/post/a50b8908.html","b8ad6113249af758d7d1d8d7a8a66df9"],["/post/aa1eade8.html","0c9761f9f526dddbf0ecd4e64f1d93ee"],["/post/ade8c6d6.html","03560c900712ab9122dc13a319c88d21"],["/post/ae8362df.html","8a8cabe2cc640d0712d503cb8046c1e2"],["/post/b4c1d206.html","9bf789b1e78aa9d62886a587af2e2120"],["/post/d213fc7f.html","90cdf4160197ed010c2d9893f19ad9a8"],["/post/d431fab4.html","dc30606e2c78fbd141abb186cb895eda"],["/post/d5381517.html","e1a93e0b0d509be8f2d15b6de1a39da1"],["/post/d94f88de.html","1fd3e387c14c55647d82074da5200ba7"],["/post/e058ffd8.html","382dee992a0a90935486d1e23006c748"],["/post/e0f8cb74.html","6640f01f5edc6235c7090b35d289826c"],["/post/eefe591f.html","5d53e0a079a2a3e7731b5fd52afd3be4"],["/post/ef296a07.html","16ddca813a573c8cf600f9f95871aa14"],["/post/f201f9fd.html","f9f584982bd7238b84034222724feb35"],["/post/f79e4123.html","8adfce60b067d867a6061a7f06a8b3d8"],["/post/f8648a1d.html","6c76c6ea482d11dcf897174551917eea"],["/post/f89cb603.html","8d699c32b893bacd67d95151a8e4e82c"],["/post/fa288682.html","ab2bf55a2d699aed20b325a6e15b923e"],["/post/fb98053e.html","4c6a85f63928839f322295c76532107d"],["/sw-register.js","8687ff7e8e0244d66495c126218f310e"],["/tags/AT-T/index.html","c864977d80634dad205854e09f0eaf2a"],["/tags/index.html","0c94979913942b17078c209f2ed93326"],["/tags/动态规划/index.html","751fb5c8bf0e094a2bd3d5e3f8bd339a"],["/tags/字符串/index.html","101510bc8947e5b92b25bedaf0ce8f34"],["/tags/字符常量/index.html","579ee67a6eccc3781a542022c2a58f22"],["/tags/快排/index.html","e81b8893d017cad29a10e648deb6359d"],["/tags/排序/index.html","20cca370388959e747489633a303cd53"]];
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
