/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","02414df86a2198142e26d956b56caba0"],["/archives/2019/index.html","de157476064320b5e366d4c25bfa4873"],["/archives/2020/01/index.html","b0536b5ded6fa2919ea270855e23122f"],["/archives/2020/01/page/2/index.html","f42af899662d83486276c3f36f17e21f"],["/archives/2020/01/page/3/index.html","1b5980a6aa7abf0e323a4644b3b75c7e"],["/archives/2020/01/page/4/index.html","38300f25ee75840b33fc7be154401a07"],["/archives/2020/01/page/5/index.html","11b3ffd80bff2027090687f3ec0a098f"],["/archives/2020/01/page/6/index.html","fd8528ea2742933682b68aaac38bdb73"],["/archives/2020/02/index.html","f2fc517fea69c90b7a873ac5273580ca"],["/archives/2020/02/page/2/index.html","c6f4c953eb7c6a18f5eca4eecc7edef6"],["/archives/2020/02/page/3/index.html","242f93f8bd9a2a5cdeb060929cc136d5"],["/archives/2020/03/index.html","2a8ba76706ff1e4ae193f36a6804be0a"],["/archives/2020/03/page/2/index.html","15fc07123f827f46e088a75bff5fa3f3"],["/archives/2020/04/index.html","f67081edd534e5504bc43adcf83f0a40"],["/archives/2020/04/page/2/index.html","de38fbf2faa54ffa0b51d046d0117cb9"],["/archives/2020/05/index.html","dae547a78834813bc2876425391631e8"],["/archives/2020/05/page/2/index.html","8b2512222dccaf1a58f516cda4b7aa9c"],["/archives/2020/06/index.html","a85efe3d634a31106d3af51adb289a12"],["/archives/2020/07/index.html","3ae7a5c628fe6514300f6cebf2762cea"],["/archives/2020/07/page/2/index.html","83b8cd9a7f85677bdf87966354f746c7"],["/archives/2020/08/index.html","c0d787e6e216244c0f71abd3f3f63f6a"],["/archives/2020/10/index.html","f2318e1476296587cc8ebde5ebe71b6b"],["/archives/2020/11/index.html","88650cad85304f497a5ee79f54dfcf4c"],["/archives/2020/12/index.html","b650eeb1ebdebd4bb7ed6ea97df5f5b4"],["/archives/2020/index.html","a06e07a922d597b15ca85e69d5658a2c"],["/archives/2020/page/10/index.html","576e8d57a032af456b84b7da0a645b67"],["/archives/2020/page/11/index.html","6bb5cc9fdee9107e6a532d448c112f78"],["/archives/2020/page/12/index.html","59e2a959c8e974178473f8e373135bd4"],["/archives/2020/page/13/index.html","d42bc0563479334971dd54784f63b818"],["/archives/2020/page/14/index.html","351f8ee82873d0a0f5e7e92e9cf220f7"],["/archives/2020/page/15/index.html","87f74b04c7483f3fc0a3d09f21ee3c79"],["/archives/2020/page/16/index.html","a9db3e3884b5c3f2591facf922e8fe69"],["/archives/2020/page/2/index.html","5a9f839937b70eb10b77d04b01809a7d"],["/archives/2020/page/3/index.html","3075ac5cd893815d75c1b1fc339b0e02"],["/archives/2020/page/4/index.html","02b1fd1b703f628e51d9db294c332398"],["/archives/2020/page/5/index.html","7302b27d8905ff9ccfc69342c7a9c8d8"],["/archives/2020/page/6/index.html","44ecd3b950f9fa5f55f65427d0339ed2"],["/archives/2020/page/7/index.html","7a3b81633c7796d583977d1f6d1ec568"],["/archives/2020/page/8/index.html","122a7b88dffa3046c93406579fc4cdd3"],["/archives/2020/page/9/index.html","18644cf7c96cd41286e14ed49ad04cc9"],["/archives/index.html","7254a159e04282e438e2e25c40d6decb"],["/archives/page/10/index.html","429e08aea3c263eb96d85fbe296049b8"],["/archives/page/11/index.html","65f30f0fd4d3946b356c783469ec7f33"],["/archives/page/12/index.html","eb86c25c779de7315ca30e1f3a2d2598"],["/archives/page/13/index.html","eaa490de8af307744c0cabf9991256e1"],["/archives/page/14/index.html","581c199233af4b92c74b7cbf7fe65272"],["/archives/page/15/index.html","af7cf97ec22ec844f59c0e02cc368813"],["/archives/page/16/index.html","57ddbc5670afdab5bd8bdeef1e13f06c"],["/archives/page/2/index.html","2ab08c5126951e4307bb4cdcb8b61af8"],["/archives/page/3/index.html","a16547a4fa519aa5f1b100d5f85963de"],["/archives/page/4/index.html","cbec0641d62b7a9dfa513ad5214d126c"],["/archives/page/5/index.html","3ee1da859b40835fc1097c95d55034be"],["/archives/page/6/index.html","e7980dcd0aa6caefa724297c9f2f954c"],["/archives/page/7/index.html","38bdc3d7ef0c0399bbdbe0ba316ed98c"],["/archives/page/8/index.html","a5f774f8573b6c2a3ab72094442e1f1e"],["/archives/page/9/index.html","2475e1bba3f65be7ca16100d75977872"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","781cbc0989427d6a0f9c7c045461829d"],["/categories/Linux/page/2/index.html","af394b86ebeeb88b91812c101e1561b5"],["/categories/Python/index.html","34b26a0b4376d975e27f57c6d49e38b9"],["/categories/c/index.html","596ecf6486769c9886db9a28bc8f3542"],["/categories/index.html","96977195fb2a40ccdc6a247f30015e92"],["/categories/java/index.html","87223dc355c38e2cc5f2015df3d72b66"],["/categories/java/page/2/index.html","07d72035043315f77eae214ffd788485"],["/categories/java/page/3/index.html","3c3c7ed4aff7fdced2b95b9ed0d8b83e"],["/categories/next/index.html","154ed95a917c183044c20115718015c8"],["/categories/stl/index.html","74b02bc24f15ba69f8d43af916859657"],["/categories/windows/index.html","672dd91ccae611726fb0e8617c524d87"],["/categories/基础/c/index.html","73ca7cb0d8a0b63aa631f30ba6481961"],["/categories/基础/index.html","78f098c1b7e0f179743a7e0828e4545e"],["/categories/基础/page/2/index.html","486cfcef5a00fa38faa116c3f1d79b48"],["/categories/数学/index.html","77dc90dfce6e993c7d4dd3bd9009798e"],["/categories/数学/概率论/index.html","6cb82a468d3f9c6f8deac899af114251"],["/categories/数据结构/index.html","65add3dbd62ab289859026349fb8ffcf"],["/categories/数据结构/算法/index.html","b410232b75222aed05e1d558be57c9f8"],["/categories/机器学习/index.html","5c93b024ce5da85a9c4a3fcadf19ce52"],["/categories/汇编/AT-T/index.html","6a92b23c17053a0c80dbdf3fa7fb208d"],["/categories/汇编/index.html","ed90043de1ef4f6cda44f87d05a1ed9c"],["/categories/汇编/page/2/index.html","d9f428cb7d144370f51f45b666b8793e"],["/categories/汇编/page/3/index.html","7b12aa3b35261e9822d20ee81f4154ae"],["/categories/算法/index.html","c156ae0913e3a3233a89ba6553a89b42"],["/categories/算法/page/2/index.html","ce7bc268321d2b7860766fd187ac1520"],["/categories/算法/page/3/index.html","0fab393c7a4e6393187e3be2171b9baa"],["/categories/计算机系统基础/index.html","24891abac84a2f9c7bfc8ffbf5cccc5d"],["/css/background.css","39b1b22e2903e556913dc52516e1e7de"],["/css/index.css","81540c084fb756b1a9f1bb2b6a0e134b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","7fdafb6edf389cdd903fdf3afc670702"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","c639bd4fe0a3f3a3fdebea125f4b2700"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","e805b3b2552d892d23bd53c29deb2ab2"],["/page/11/index.html","d9b964375b8fac465f5b64b16bc99afe"],["/page/12/index.html","1f279266e5ea53c1e14b9ffda97558c9"],["/page/13/index.html","cd42a8ec3ab385a57144885bcc790384"],["/page/14/index.html","5f04c7de08f0fa0bb6001da9172e06c4"],["/page/15/index.html","322f77997bc7cad6f2031226386766f2"],["/page/16/index.html","cac11f0b604644b69df05ca6ea94458f"],["/page/2/index.html","bfb8bd74fff3ffb2b4513e361e5eee16"],["/page/3/index.html","46a802195deed4c1303f31956dc63ce7"],["/page/4/index.html","dc97938d92658b2a32f14e03c88b4075"],["/page/5/index.html","951c15e86710536d0db6738d4416cb05"],["/page/6/index.html","45577b4f1a4c39e691f81411f0821860"],["/page/7/index.html","e5ddb2a7d2b45e98a15a5bb2e5cf8102"],["/page/8/index.html","947423b0ad3e1ff44b91ced531d73ffa"],["/page/9/index.html","dfe92e8b8c8754ea084c206903bc4284"],["/post/10919.html","cf48c227206abf648f179ec733c8e0f5"],["/post/11051.html","bdee74e3168e7e6c5c87e0da1314f0b9"],["/post/11306.html","244a8039c7bd43422cd918608d4e8823"],["/post/11491.html","7dfa5d36ae7261f59afcef191026b97b"],["/post/11799.html","ba93ff4bf251750cfedadd28bff60b89"],["/post/12334.html","5c69a42446388eaa23bdbf314fe7c7fd"],["/post/1326.html","43abad0ab80c2136089909a57028ff79"],["/post/14379.html","6455f431f0f2cc6214c72e2b717b2b70"],["/post/14511.html","cdab2b37b03a41898f696ddeea4b87c6"],["/post/15201.html","fc63a3963c5e4ebff2485f553e1a44dd"],["/post/15425.html","468988428e9bb9565978bfb99c5a3127"],["/post/16107.html","e9362dd2054a414b1827cfff796098b7"],["/post/17862176.html","39ea69a77af1a95b3209765a948f0279"],["/post/18431.html","22467b66668af2263a52c81285d86621"],["/post/18912.html","6eb4e86c10a3ce8ff4c7a60f525085ef"],["/post/1b9c8662.html","d0c5153d6db0eac6385d946473d52977"],["/post/20198.html","475915e584f60245d9c8a771d08f3ac5"],["/post/20ff5ccb.html","d91b563663fdb8ee2a9cde9c36ca281a"],["/post/21624.html","2e1244fe7d8ad51a8ad2c607260f2289"],["/post/2170659a.html","6c1c4abd19df2ad4e0a4632041594d57"],["/post/22102.html","f956e3eca65ed28d82de9c5d8736ffa0"],["/post/22493.html","e7eb9dc3a7d515cc39847b164e93014c"],["/post/235252ea.html","d69a490cda46924beacaa3b328a4f103"],["/post/25699.html","e91fa7c4f364b1f1f10dd0ff53cfc777"],["/post/2647.html","ea19a1c363c5778241f4c72c32218796"],["/post/26477.html","81e70fb84adfcce6f09d03d258a6aa0a"],["/post/26671.html","01a5f596bca4fc63517ae71ec2d7e8cf"],["/post/26737.html","22990e8cf32013cd82837ddcadeffed8"],["/post/27045.html","05bbb0ee2cdf3d0f4a75e33796cba990"],["/post/27621.html","cd3b4f7f3686ea4e134086c376656aec"],["/post/27890.html","4b949b08d1a8148800e599fb0e403054"],["/post/27980.html","4c1dee11ec8bd55d3ad6e0b013e32c15"],["/post/280b588e.html","cbefe70e433f048de14058bc42af21ab"],["/post/28579.html","d782a1300812ad398fd76c0314843816"],["/post/28877bf.html","2c2d820bdb332d079404de1ce720b1c1"],["/post/28954.html","d0170d66709bcc3280a4f201bca3734c"],["/post/29378.html","2b5422eedb020025a33ff2edae3be55a"],["/post/29949.html","cd93f6673c346fac67d388b813717128"],["/post/2ae43b86.html","1ecf3ac8bb0143cadac3c4cc4d37939e"],["/post/2ba82a45.html","bf911c30db6f53aec84d1119bc89752f"],["/post/30072.html","064202cb181fb1bb4854f89f6fe7f071"],["/post/30479.html","92bc6293680e68bc11bd089943686814"],["/post/31a6b40.html","58354750a0eeebfae7292246dc15db6e"],["/post/325cdbf2.html","ab59ee9ef95ff2a0cf195de3e26c0fa3"],["/post/3319ed9a.html","9b6604549cc885276fb8b12b34f71819"],["/post/3320.html","e7a2af6a7409f635e4fd886abc28b841"],["/post/33cb1151.html","9e0eb82c4aac2aa44091d133444df3ef"],["/post/34811d5f.html","485f28d8dd35f756cd8408872527574a"],["/post/348d4e04.html","42be64a911f1d33dc1cd8d529b51937c"],["/post/3526.html","e187a8ffdb0c2cd36c2996d76182980d"],["/post/35532.html","e4a630fec24f92210e3ec2b2b44afb0e"],["/post/35848.html","480b9473849a0b3e5b5e4eb2d1fd0261"],["/post/37318.html","8305b486127d30e990db791919849e76"],["/post/37663.html","a4568898be77eec2683b418d3de4a2f9"],["/post/38035.html","16108088634142d37851998bdda3eaab"],["/post/38072.html","adc5f5f5a89ebf7593b70482042c73bf"],["/post/38145.html","bc9cacc3bc6ac8ef701549eb5c1b5d61"],["/post/39968.html","8afecaccff7a0d0288f3789be429cff5"],["/post/3de4bc69.html","0621f84d91f24c9f549ad9e9661d65cc"],["/post/40583.html","3aebfe4c1008eb168bc70020616692c8"],["/post/40997091.html","4e2b054a9e6f49be1de018ad2a77e810"],["/post/41129.html","0e0492e66886e7ed6af99e633a149995"],["/post/41763.html","b879b5655ce9180209cf42c37452a0c1"],["/post/41829.html","52744cb7715f0a04b2139140dd0d11fa"],["/post/41840.html","4cc740f1e8f43750a6cc7febfc4c51a0"],["/post/43817.html","78d4d15a025c840a0bf260966b56f96c"],["/post/43878.html","c7fc549b46feca0d16c662786db0fc64"],["/post/44250.html","e0e480bab111b733aa2a7daed9efaa2f"],["/post/44336.html","6c15ff5e576a1763fa46b32bd6983a94"],["/post/44454.html","9444d14954c121aa734bb44fc2d758c9"],["/post/44487.html","9405195da04824466200c5a823eb92f9"],["/post/44914.html","76850f72dcbe284d2813e4e4c1992070"],["/post/4551c130.html","b75c63d9be47745da3013807f02a477c"],["/post/455a4c92.html","65b7f91b1d8868842fada6f303b00ec4"],["/post/46466.html","f892c6ed04f84e81b4e3c920bc2d6c25"],["/post/46925.html","1c3dfaad4229ddd686dcf347b036a144"],["/post/47075.html","cf28887e0ae58b575bcea991ad895ff4"],["/post/48220.html","b8f022ee98831c735abbf4cf9e0ecaf5"],["/post/4b1879e3.html","c0fd2124e7f8d05639c26c320e3b79f8"],["/post/4c720881.html","5fc1a63dacc5a9781a128b5e3ca63aab"],["/post/50daec4.html","517a7cec36b03573e2a48aa973e1df18"],["/post/51491.html","2c3eb896ac42925e18ce081f1f291ff3"],["/post/51e63dcf.html","d328a4655cf2787babdfedbb6642e764"],["/post/52078.html","7d8fd0631275c08321b3780286a63da7"],["/post/53677394.html","9af5bdd433e979525043741dfa2fbb29"],["/post/54300.html","e8984723b40244d5bcbb9b180ba9a43a"],["/post/54612.html","ff759c59ff80348810437dc12f8891cb"],["/post/54613.html","62a5599e19b19c9501a878fab58e6831"],["/post/54708.html","14d3951491153d60ec122a7476c46829"],["/post/54778.html","ce473e1ddfce636dd6660ddae5311723"],["/post/5490.html","5f8dfa3c76be637f56f5694d0b6f43fb"],["/post/55046.html","ef0abf46a3657c117312ec00d836aaf7"],["/post/56929.html","99c67fba63759cb42a083221377cc7fa"],["/post/57339.html","dc90fc79f13421c727d299758681a53d"],["/post/57449.html","008e6d92b8e5128f29a7beef32aa72fb"],["/post/57453.html","df4d91f3b2280ab1653f29af62051864"],["/post/57671.html","ceb9f22213c9e894b4f024d1104dde64"],["/post/58313.html","8ee1ffa346c02d0b5f720aecea643922"],["/post/58481.html","8017d26ade8b10121f60d9679d189e9c"],["/post/58986.html","d98b8addb4488bb525befb946d86b523"],["/post/59431.html","1f4829bb6fbdd302b5a7aa2909c73414"],["/post/5951da65.html","224eab6db8cc4c261f06acf640637961"],["/post/5be7e977.html","5b1495ffdb4ebdf6e4a9ad3533505f6d"],["/post/5f9e4eff.html","c60c5c46ec31f7a236f42d7f43c97d77"],["/post/604b49d0.html","4033e89390a9d1c3d7ebdba22c6a1b46"],["/post/61312.html","0e3821e9fa759448210155926b5cb79f"],["/post/61738.html","eb5f008c789c11acea9933b190369005"],["/post/61809.html","4ecda5be8631792960f8604fafcb4309"],["/post/61eaf19a.html","1281891c4a10d097d8935adc1365e0a7"],["/post/63002.html","2af6290969ab87df6341819b83e66225"],["/post/63711.html","d142e767dc68112043612d20c5ada8a4"],["/post/6587.html","f76f2699f3c26d53eb26cd1c10ba0749"],["/post/6589.html","46b650e7c9b0fabdd4761d3f1d21a65d"],["/post/6880.html","cc2cee167cffb99cb5ff181ecf1d6839"],["/post/70263071.html","d7af375a6d767341ee135311dc1b2168"],["/post/71038564.html","812688160d975802244a38cf30b0fab1"],["/post/7119.html","c1071ca07920b50d5b9df19095303e82"],["/post/74e7fdff.html","dbb5ebf9e2582d0d442c08b497c2f02e"],["/post/7502.html","f8edc0f915a717d671177654ba1d9804"],["/post/7564.html","857f75bbf6e5b421c74a2788923ab2e1"],["/post/766f9b60.html","f1990ca2c4200a3344255f01585d46c3"],["/post/7ca31f7.html","f67dcb54b8864787656cb00e9a53cbb1"],["/post/7d1c86da.html","1f654134621eafcf0fc9e96ad8363b7b"],["/post/7f3bcd7f.html","e36a614540987e6d06fe73195002f2f1"],["/post/8039.html","7c352ab2b2a890b3db8bc2496aac45f6"],["/post/8050.html","a600295a868b27781ff04c036b824636"],["/post/8072.html","fdc13198c34255e0dc4165f612ea94b0"],["/post/8274.html","d49b4fdf765813fd6aa200f40ba7e8c3"],["/post/8372.html","6ad9c6e20fa19b5581de73f0a0df8a60"],["/post/8498.html","fc83d72d1796aaca6541f028c7dff718"],["/post/85b4e13b.html","249074a0e0618fe8b60cbc3d984d2641"],["/post/912b2566.html","0914e3599fa9364cd8ab4ae54947e926"],["/post/9187.html","ef012e58a9b6263bf9472d143423d38a"],["/post/9197.html","85bf855775d25932584a79542fe2ad47"],["/post/94ceb2fd.html","e649c92b95cfe84d13b35dca37c7f853"],["/post/95495db.html","562da0c73a70fb188235ae7b86f18fd4"],["/post/97246020.html","9ed9a82c1ba6c521f5db5b28dfdc40f1"],["/post/a3a786d6.html","2485f00729b3aaf2ade0fd80e1751108"],["/post/a444b428.html","694f0041ee2aed1e629cb417372270e6"],["/post/a50b8908.html","bd2e7c3dfe0abd816c7f2e89e293e7ce"],["/post/aa1eade8.html","28a4d201244140f4115181e5057188cc"],["/post/ade8c6d6.html","e713850fb5dd4f8ae8ea042d4c99da3f"],["/post/ae8362df.html","f85457258e2ecd23fb9f3a2cd4c30e2b"],["/post/b4c1d206.html","f086ff687b5636224c2ced008d1cdbb1"],["/post/d431fab4.html","747e936818ea05f83af6a7afc8efac5c"],["/post/d5381517.html","d7721ac5e763254fac3d3a9fed564126"],["/post/e058ffd8.html","088c59a8702f2b97e22126016c93a8fe"],["/post/e0f8cb74.html","dfe565590ed04e1ea3e838bb03b57fc7"],["/post/eefe591f.html","69d999ceb49cdd51ebe67eff251d771a"],["/post/ef296a07.html","6fc16c9f076e771eeb19a82f5a8075f1"],["/post/f201f9fd.html","c89718e45c6c9fa6c87837141e045934"],["/post/f79e4123.html","8ace78ea551edbf337e095c750ff254f"],["/post/f8648a1d.html","c96a2bca7b7df6307273956eb28ebe91"],["/post/f89cb603.html","a3fe57598347def50ff93dd8fcd3cfda"],["/post/fa288682.html","d644b4f3ecb88828943cbd0599d90713"],["/sw-register.js","7707f71248f29f706061975246313015"],["/tags/AT-T/index.html","76d7b28fce1d37dbe64755684c06c0ad"],["/tags/index.html","489e26e7cca50fd67770981fb062038d"],["/tags/动态规划/index.html","03321c336c9e0b6c78e429a02abe722c"],["/tags/字符串/index.html","a0482ae7bce8a7b9b6f884409539d2f4"],["/tags/字符常量/index.html","775c8386920bd735cead76eb77e9d828"],["/tags/快排/index.html","18e3bf8d1287114ab859b697710c3c9c"],["/tags/排序/index.html","c6ad994bf3c04b0c9a20a43968c2fc72"]];
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
