/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","0f9d9350044c2fa7bc5d205d95959543"],["/archives/2019/index.html","c838fbac9235b866203a7dbb16fa3709"],["/archives/2020/01/index.html","cbb0ad3edf99a666712d7ff97b30c2b1"],["/archives/2020/01/page/2/index.html","826bcfadccd38c5de0fb1f50671657a9"],["/archives/2020/01/page/3/index.html","7888637239b849a7ccb8dcc66ce81259"],["/archives/2020/01/page/4/index.html","1a86a62bab8e37ec9afb7fb1b3684218"],["/archives/2020/01/page/5/index.html","f62ba649fe510874bce9af786d8d82ce"],["/archives/2020/01/page/6/index.html","6aadfe47201ff22f1a545314d9393eee"],["/archives/2020/02/index.html","b288bbd44a682d50873e7810fd18514f"],["/archives/2020/02/page/2/index.html","56255f8e784ddfe330e00f10bf93c4e8"],["/archives/2020/02/page/3/index.html","c6936ddc9e5e6fa71171e9238988e94d"],["/archives/2020/03/index.html","49fdd0cec2a176326c348fa816668faf"],["/archives/2020/03/page/2/index.html","f4594cbf438aa3d63bdfb3b4a258fa16"],["/archives/2020/04/index.html","6004857c41f1baf11ab8d64468c404a5"],["/archives/2020/04/page/2/index.html","a47e858296466de35832b70f3d4867b5"],["/archives/2020/05/index.html","4b58d483c39fc6d4ca5c4a35f8f79a23"],["/archives/2020/05/page/2/index.html","5d73178475c54980016abadc117d6bd0"],["/archives/2020/06/index.html","6a9af8a0e5ab1fb4410f0f4e9fb6c386"],["/archives/2020/07/index.html","36610af62ac39a1d67d2e3d540cabc29"],["/archives/2020/07/page/2/index.html","36bae38a6f646b828eb4061b73ff1bbe"],["/archives/2020/08/index.html","369991365c404b6546798b2fcfd93c70"],["/archives/2020/10/index.html","478da398fabb82119f9ed8ed8f6b8ccf"],["/archives/2020/11/index.html","df3c1e5c0c7cfb92a2c65ebd98811fb0"],["/archives/2020/12/index.html","8b51a2e503f5618dd6a16600a20db510"],["/archives/2020/index.html","e5857b3d6f7e38f027e7776c349e26aa"],["/archives/2020/page/10/index.html","99f9037ff3730eaacfb12411c6b9a94f"],["/archives/2020/page/11/index.html","4e8da8ff040624361dd4aecbf1939370"],["/archives/2020/page/12/index.html","23c5e9537aa521817d90df11f1e5b05a"],["/archives/2020/page/13/index.html","efa25b19de084f7b9c9150ab7f15a1b2"],["/archives/2020/page/14/index.html","96a5b6ae3b62783042538e5833c31028"],["/archives/2020/page/15/index.html","0060db48bd34480be6fbb095246ccfbe"],["/archives/2020/page/16/index.html","aec1ccc899435897d5a2b6c7f4fdd46d"],["/archives/2020/page/2/index.html","fca7ea7801c02644c12b626f751d324d"],["/archives/2020/page/3/index.html","abbfc10dea3ac7590679cc371f849d3c"],["/archives/2020/page/4/index.html","5a5b6bc9a5d98539e43726c4d1f82187"],["/archives/2020/page/5/index.html","97780cf5f09dc0b1dbd4b82ca208b591"],["/archives/2020/page/6/index.html","cff42d746de01a637fc299fac6ba8279"],["/archives/2020/page/7/index.html","ab004232227df0a5b2db4bf93c377f85"],["/archives/2020/page/8/index.html","b4e0bf1fbf88069e1745f0360903c5f0"],["/archives/2020/page/9/index.html","e54a0cd20ce1de6addcf238dfec91d4c"],["/archives/2021/01/index.html","c385b2b5a932cd389cb2404e8fb407c8"],["/archives/2021/02/index.html","cd1b4a082f7f6a708f11ce257e207be8"],["/archives/2021/03/index.html","f8a1ea3321040c0bdac3a0ab6e250546"],["/archives/2021/04/index.html","410b24200d5977dd32b99e16a4ca7d7e"],["/archives/2021/index.html","d2e4ef9f33d020173afb213319024c01"],["/archives/2021/page/2/index.html","f6ecae264648077bbabbe7d204db12e5"],["/archives/2021/page/3/index.html","f9992092f7eea6f63326bba3e99f474e"],["/archives/index.html","65bbe3b6dea986150f0c7bab1d4a4fcf"],["/archives/page/10/index.html","7f45c08632156345edd52df475e04179"],["/archives/page/11/index.html","ff9206de98bcedb19d2eb06154a05721"],["/archives/page/12/index.html","02c20f35af7543e595cb3fac5eb4ef93"],["/archives/page/13/index.html","3226c5d5b75c322174e02de87876703e"],["/archives/page/14/index.html","d82349fde7e16099a3993d741ca30e5e"],["/archives/page/15/index.html","57246ce541215d0c2d8598438026d6f4"],["/archives/page/16/index.html","fe79b59dac64e10f732e4ee33881c495"],["/archives/page/17/index.html","76c2e575ea2d0e0efdf248b54700f5fc"],["/archives/page/18/index.html","51c5328a15e5e22803f766cb7ec8219d"],["/archives/page/19/index.html","ed11673a0052f33662e87e0fee0120c7"],["/archives/page/2/index.html","55e1867e95a00e181ab37396122a6e90"],["/archives/page/3/index.html","78be47de30eeca0f4f9ada200f9f221f"],["/archives/page/4/index.html","7c6018b2326cabc6b767f2e9dc0132b5"],["/archives/page/5/index.html","4cf1cd70f91c04f50910aca201297331"],["/archives/page/6/index.html","a8a11d83b8d92acc3efd2b035abe80c8"],["/archives/page/7/index.html","7cd78a06912a36d032b568616cf51008"],["/archives/page/8/index.html","922629b5d59e59e88dac968dd4199707"],["/archives/page/9/index.html","106ba1943b8dcbe5b36649109da19ad1"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","5cf9abf78b40dae27cf4fdb08034f15c"],["/categories/Linux/page/2/index.html","93e952466512d662e537290f3bf1832a"],["/categories/Python/index.html","05fbe545e539ac52233954817ac53730"],["/categories/Unity/index.html","78fff25be98964bb60fb2e43c7bddc3d"],["/categories/c/index.html","8d442dafb15aec45b5634ecb2de0c730"],["/categories/html/index.html","843044e758e31ff915f92c0198a64e04"],["/categories/index.html","6cc7c43a43cca905beb3cb5fb171f31c"],["/categories/java/index.html","8d0bb4dace2ae74076e504aefbf7336a"],["/categories/java/page/2/index.html","cefe974b803fd15acba291408304fb5e"],["/categories/java/page/3/index.html","ef403efed3eaea65aca619d8beb1d132"],["/categories/js/index.html","d3bb4543516f1f56e4a1f869a25fd6bc"],["/categories/next/index.html","de69e7693726a3be466421e46b607f01"],["/categories/stl/index.html","5e7499b6c0f34baa38519df8d60422de"],["/categories/windows/index.html","02b71d02a7427007b0471fb3fa1952b5"],["/categories/基础/c/index.html","7fb27cc29b146d01d685ac807e1c9c86"],["/categories/基础/index.html","4b62fb73898cc1f8abbdd9b496ed4fee"],["/categories/基础/page/2/index.html","6e12860fbd09498076ba0033571c4998"],["/categories/并行/index.html","421cb6ab4275fe6005cba0dc657f1b5b"],["/categories/并行计算/index.html","971f0245f8efdf8b83f3fd3045989027"],["/categories/数学/index.html","3d3ed27844e37c376e1129da911aac72"],["/categories/数学/概率论/index.html","54ef6a1e127cf261add108ad34d6a054"],["/categories/数据库/MySQL/index.html","0991f6f3d17132e033441c6236942bb3"],["/categories/数据库/index.html","429e0627b78a181c6a763ce7b6376fa5"],["/categories/数据结构/index.html","c9ac63c96170558d87fdaae379377b31"],["/categories/数据结构/算法/index.html","8d5c68ad1a226642db4610ae00486a2f"],["/categories/机器学习/index.html","d49d8c31028d1ad64ae4dee154559f56"],["/categories/杂项/index.html","52a5cb0f099c9f162e11918c5c66302c"],["/categories/汇编/AT-T/index.html","671303a93301337037c52ab074db8ad6"],["/categories/汇编/index.html","e177116316aa54f4591a3ad2f7fee1f0"],["/categories/汇编/page/2/index.html","9d82cab43d4a2f822d993b2041ae5bf5"],["/categories/汇编/page/3/index.html","99a01fa2cc899577b24e9f285e251825"],["/categories/算法/index.html","eaadb8f679e064e8a78e6d5ed1b7b213"],["/categories/算法/page/2/index.html","5f8d8583e3605745062a293824cc3953"],["/categories/算法/page/3/index.html","8ff11e68879fcd82f7c204eeb84379bb"],["/categories/网络/index.html","8a4540d883ad8dd6a1d734aaec924faf"],["/categories/计算机系统基础/index.html","a775a3dd305cff71fd1ff505c55d39fe"],["/categories/计算机系统基础/page/2/index.html","508eea7c6720649512d198fe21f35c71"],["/categories/逆向/index.html","f168153250bb7ead80b451a3c3214d69"],["/categories/逻辑电路/index.html","55b9b0211f10f94f5267ade9c4b97b2e"],["/css/background.css","2c8612158e42088b891f59480ae6d785"],["/css/index.css","779f61c8c1b448225e33a0a30297c4c0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/Snell-Roundhand字体.ttf","2ec54ef3411fd027522c5f1b8b6fe726"],["/fonts/漂亮行楷字体.ttf","2d252f361cb5bfe1f0b607c07143b506"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/HTTP1.jpg","30e1bea7769f2cec34130f180904cf65"],["/images/Hadoop1.jpg","18b1041a29f02839281a1cd61c0a542e"],["/images/InkedInked组合逻辑设计15_LI.jpg","20358d0724cbb38cf7ad4897cd252a4d"],["/images/Inked组合逻辑电路13_LI.jpg","b3be5fab7d61b73a3fea5e2692d7de5e"],["/images/Inked组合逻辑设计14_LI.jpg","e05debbb516b45c1bf251c25ece469f0"],["/images/Inked组合逻辑设计15_LI.jpg","1da4e28a4cd3fc4c11e7ab716709c210"],["/images/MPI编程1.png","ed530f67b0e7e0f33df20577b39d7247"],["/images/MPI通信2.png","ce919e1ba147cb367745fc829c2e7fac"],["/images/PE文件1.jpg","9f673b828bd69f07e1a3c646ecd4367c"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/RNN8.jpg","d0a7f6b9ccef6c87b259b60e8af4cfed"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/dadoop2.png","80332f4c9dc01e3deb00675a60bc5d78"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/hadoop3.jpg","ce9820e347660721fb4dc8a068407777"],["/images/hadoop4.jpg","5710682f4f0e6f4cb50a1bb5842282f2"],["/images/hadoop6.png","9654ec71e75a28d0426d858b9fb03cb2"],["/images/javascript1.png","dd3499b8d6e5e01904c1e8b3f50e45aa"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/java集合_列表_队列_映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-19.png","c944df9f2f13e0cab40c3c2e64bbaff6"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-20.png","e150eef87d8433c63edc61fa43d1f981"],["/images/pasted-21.png","f22837165193588f27a249a02eea4524"],["/images/pasted-22.png","73dd827209b5bc51cbdaf6be23e073d1"],["/images/pasted-23.png","3858fa45b7a7c0f6c41e238dae035da9"],["/images/pasted-24.png","12dce347bf4f7677e495cde27b048c89"],["/images/pasted-25.png","22416169052b69aa6bd62720d0d8d3a2"],["/images/pasted-26.png","f1a8c482811b2e822841100f69681455"],["/images/pasted-27.png","17984ab0385473e02430061c5832fc19"],["/images/pasted-28.png","44e682ad4bfbf2b20343ce55ed877d8a"],["/images/pasted-29.png","a60a4fc7812f20078e4e6b5bb6b07721"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-30.png","ee101ea21972b3ab71b3e8cbd62fedcd"],["/images/pasted-31.png","4759294af3a90a1a857124f247a4d777"],["/images/pasted-32.png","805ca0a1863b73f5ed92f042c12df61a"],["/images/pasted-33.png","730864390853bf56ccb93a40adf61026"],["/images/pasted-34.png","7a49f9e559140600426520aeb28ec206"],["/images/pasted-35.png","29c1357596235d6bfd7f42bd809d7e39"],["/images/pasted-36.png","f84229b3658edd6fbc1054af9f409cd7"],["/images/pasted-37.png","bcd95f06c4879b597118a2eef82a63b3"],["/images/pasted-38.png","869d087e64b3af39a3782c82263f2ab3"],["/images/pasted-39.png","163762097154056aef2aab69be0cb57f"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-40.png","ef974e633e6529c0fef054ba0040e62f"],["/images/pasted-41.png","91c939f5991ecdf3981be7af94d4403f"],["/images/pasted-42.png","29b1481876fbe1b1326095fd092a98ad"],["/images/pasted-43.png","58b98d4645fcfbb023c2c312ab67d1f1"],["/images/pasted-44.png","086c1d8ff6cde02cfdd23ec81a475da0"],["/images/pasted-45.png","aa7d2deb56c2c3fdbeefc8865c670e81"],["/images/pasted-46.png","0e239518ed6cd922814d0fc70e39ab66"],["/images/pasted-47.png","af0c5ad28140305a6240fbec7c396d4c"],["/images/pasted-48.png","93fcba3560d940d48448135a02dcbb13"],["/images/pasted-49.png","93fcba3560d940d48448135a02dcbb13"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-50.png","4072cb3b9bfa4f91f35539faa74f2c6a"],["/images/pasted-51.png","3a195c159e35be6babd48aac5bf2de2b"],["/images/pasted-52.png","21346633be28fb02dd3d04da0e464d0b"],["/images/pasted-53.png","d522b3a69437b1a6a6eb2a21fc0fe9fe"],["/images/pasted-54.png","33eba22b1ccef5f0fa21c742ce6ebfa1"],["/images/pasted-55.png","f755a395df963b7bf6fa9cc0fb7ba40c"],["/images/pasted-56.png","f755a395df963b7bf6fa9cc0fb7ba40c"],["/images/pasted-57.png","c9a60834fbae840ea37440adc6c21af1"],["/images/pasted-58.png","38a77ba94510e9dd232a216180203a5c"],["/images/pasted-59.png","9c7af8544f1c33032032a46937456458"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-60.png","a2c19835599a9e7057611117f40505fd"],["/images/pasted-61.png","45ce34e736699e3f0ccab20d84de1ec5"],["/images/pasted-62.png","45ce34e736699e3f0ccab20d84de1ec5"],["/images/pasted-63.png","ca5dfdd8338d587c32537ef631051a1f"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/spark1.png","74e891699488b94886cfc28b98ecb199"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/关系数据库模型1.jpg","2b0899e613f5771fc03a5397e513d4de"],["/images/关系数据库模型2.jpg","e41af0d63cba09871ef13f23f87b758c"],["/images/关系数据库模型3.jpg","e908ef253ca12548f359a3cb2206ef68"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/字符串匹配2.png","a2178ecdbd4061940f57c5ad7a3d3a29"],["/images/字符串匹配3.jpg","62ad48f6df4067ac8ba78fae289aec41"],["/images/应用层与HTTP协议3.jpg","9f8dd77e70aa4f6ceb5f6ff52999486c"],["/images/应用层与HTTP协议4.jpg","2d79dee035b8a557b74c312cb88790b7"],["/images/应用层与HTTP协议5.gif","a669d1cf7e5033dd80ff8544273c0f1d"],["/images/应用层与HTTP协议6.jpg","b7dc39f7cc8f5e8fce7625aaf9639726"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/引用层与HTTP协议2.png","87559bf7ba74bffe37c156d4ac8173ec"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/无线网络1.png","8ae03216e1d41f3fa5116ccec5014077"],["/images/无线网络2.jpg","de2fc3016d85c8bcd272dd8bbc91e794"],["/images/时序电路10.png","a1c552571987118b7be43072d06698cc"],["/images/时序电路11.png","f48e512d2ffb7fe905c14eff4419c3b1"],["/images/时序电路2.png","a97ce56f602f5ebdc40ded148829ee53"],["/images/时序电路3.png","4a44556ede70ac3247a7a6302babdd48"],["/images/时序电路4.png","dd3a9b392604b1a4eef3a50e9e3c5529"],["/images/时序电路5.png","e504561f49f83e4c5901b087b62ab800"],["/images/时序电路6.png","2929c1e70186d9a9fed5d3e869bfa72a"],["/images/时序电路7.png","3a1bebaf06949581fdadd35ebae31777"],["/images/时序电路8.png","743b216b1a976f6c4e3b829db61919e6"],["/images/时序电路9.png","d799f6b0fe3bb272d0519b3cb1f2c7a0"],["/images/时序逻辑设计1.png","606b96f849348c83941fccb8864833c3"],["/images/硬件描述语言6.png","52e2a10422fba145bda8ceb7b160e12c"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/组合逻辑电路13.jpg","7faf9b4790ee7c7c34d9ade4baa2b220"],["/images/组合逻辑设计1.jpg","bfe7e1b6ccb75263fb30888483d68101"],["/images/组合逻辑设计10.jpg","052ca3cdf73cdf7c48f6556b59d2f4a1"],["/images/组合逻辑设计11.jpg","eedf7e7aae5c80eb37b78ad557f436ba"],["/images/组合逻辑设计12.jpg","dcdb202455ad340039025a839b592abb"],["/images/组合逻辑设计15.png","0ba1c8f1302cd5d6f449fedcc5c20dc4"],["/images/组合逻辑设计19.png","0e52bc0b16115886ba8de1aa4eec1949"],["/images/组合逻辑设计2.jpg","08d768b88a5013165266a00253dc3e9c"],["/images/组合逻辑设计22.png","d18576769cc62d450b2f0268343c9e93"],["/images/组合逻辑设计3.jpg","b4529ada409ecf161ab2dea9071361b2"],["/images/网络层1.jpg","1d4233d4673b7f420ad697652807a1c4"],["/images/网络层2.png","43ea2f9a0123b16603fda74fe7a129e8"],["/images/网络层3.jpg","cc17d38c80d7e7d2b330af541458d8c4"],["/images/网络层5.jpg","fefce8be7f2ebbac1c7972af1c14edad"],["/images/网络层6.jpg","bed91d30f37c2febf4fd09c2d4b8b2cb"],["/images/网络层7.jpg","4bce5f4cba4e1703e36b6d12fd649574"],["/images/网络层8.jpg","84ba3d5cd61aea680cf20fa55d0cdedd"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/运输层.jpg","5b0a17debdd2b880203ee18d4779c5ad"],["/images/运输层3.jpg","b9a70cc24bc81ccf9f94770936a7dd50"],["/images/运输层4.jpg","67b41ea674abb2d6d422639593c0acbd"],["/images/运输层5.jpg","570ddaa64331a62f84e97fd6dc96d15a"],["/images/逻辑门1.jpg","756745dfdf1368dbdb3f03f308a79e1f"],["/images/逻辑门2.jpg","6f66eb9c805b6a8a53368d6f6a01c218"],["/images/逻辑门3.jpg","7b86be428d777d6a77261aaf98f601e1"],["/images/逻辑门4.jpg","765361cad7db7efe40550d357a1c29ea"],["/images/逻辑门5.jpg","e2f487511c4187e76376444309e87adc"],["/images/逻辑门6.jpg","7addfa1723cba8a5b0799af8ee29f3fb"],["/images/逻辑门7.jpg","7db86a615fdb929ba55aa75172957824"],["/images/逻辑门8.jpg","70f5e2d4b12d871a36e843755204fc03"],["/images/逻辑门9.jpg","e05912c381732bb5e7537d744f599f96"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/链路层1.jpg","2f8c7cb102f9eccf14fcacf870e143f0"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","ccd3f4dc7e1a0ce62fd3f8dd76fded08"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","550fac06cd8e75b006c3b1f93cce155d"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/mychange.js","824ebe97d4450653e930dc36dd48d80b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/page/10/index.html","cfd16eb7dede17ef8ffba70716bdfbaf"],["/page/11/index.html","5a860a3fbb3905ac36e646c12d9b080a"],["/page/12/index.html","9926d297a8d62c7c86994d016c31971c"],["/page/13/index.html","fee56fe80c07fdcd38e3b66afdcfd0c6"],["/page/14/index.html","3a6f15915c76aad48c7df540eda67b4a"],["/page/15/index.html","a6ae7999f5f15874d7641399da5dd48d"],["/page/16/index.html","c62c152f30f7a6371a8c544ef4c8320b"],["/page/17/index.html","5ac04abbce23a814b61cc164062aaf38"],["/page/18/index.html","db454dde2589d8827560534599b2f06b"],["/page/19/index.html","8c9641696eb0bf6cd05653182cb78197"],["/page/2/index.html","35d10d10f7666775c6396fdbb1ca9e0d"],["/page/3/index.html","9afb37f46e6443c22c4b997eae8451ca"],["/page/4/index.html","064461d23bbbf55146a7406d688ae509"],["/page/5/index.html","e61a095b7efe174a838fff68e00c00db"],["/page/6/index.html","c9c1cfbf41cb7d190929972ddc0732a9"],["/page/7/index.html","924fbeefcde2f93dfcdd7f7d9d9feb35"],["/page/8/index.html","5f2ed294b386f33cb626fc0672f2c1a2"],["/page/9/index.html","7cdddb64a4da600ce7ba6802d7ca5864"],["/post/10919.html","09b6cdebc56405f1e81c8933b95f472d"],["/post/11051.html","5d3a5a91beeda61a6d402a471514838e"],["/post/11306.html","4f45e33f620d1e8d1576e6ef578858f0"],["/post/11491.html","fc7dadb463b69f78b55e156f011927ed"],["/post/11799.html","d4aeec65f1b344236402be329d690ef4"],["/post/12334.html","e764a96d1fdfe8e07e806696635ccafe"],["/post/1326.html","6b8791c008d2d4067d837ccc4aadab87"],["/post/14379.html","770a589f4bcebe77c6d634b5cb12862c"],["/post/14511.html","fe18a968e01fac01cc63e8d6e522ff71"],["/post/15201.html","af2db928b9d5e2710aa049b8c2b3f0b2"],["/post/15425.html","812ceabec116cfcc373fa0cb74f474d8"],["/post/16107.html","28285755f8317ce51b08461a0d6dcf32"],["/post/16e2846c.html","f09352f7d08a3294461d2c236cb187de"],["/post/17862176.html","706a4331604069f39a4a836117a305ec"],["/post/17ad67a8.html","6d09bfbf0642e589f2c3494b6549c45a"],["/post/18431.html","a3c2a2c48da1d2296610d69b6cf06648"],["/post/18912.html","b9c74561a4aac30be8be836a35dfe925"],["/post/1b9c8662.html","250241c040f74ec802738baf75baa6e5"],["/post/20198.html","b60db97a7e6ed9ffab2423596d5c99e3"],["/post/20ff5ccb.html","ce40d203bb8c4d6cb0755e52ebf88c99"],["/post/21624.html","232e41fb7f828f2349cbd6c131425fe6"],["/post/2170659a.html","839b1e4b6b1aea4815eb42aaaedb0bf6"],["/post/22102.html","a5a2025c19f1e8554ea947c65c13de4f"],["/post/22493.html","b7ff535d55758984ed60ab10a99b5afe"],["/post/235252ea.html","d225ec51678f20b6252e79ee544db07a"],["/post/25699.html","611c37a4709a896118f7ac96847e3e06"],["/post/2647.html","77051628ef5632f5abeb248f111feef1"],["/post/26477.html","e272e7f3e0acc02d7f174a4f38c8350d"],["/post/26671.html","b52c5e2faac858e6e496571a3c736d5c"],["/post/26737.html","f75d9cece3d493288394ac9572604105"],["/post/27045.html","ac73626c3f5350de4d3156fa0f9cead4"],["/post/27621.html","f72a7a8ea3aa10defba329936b13290a"],["/post/27890.html","f9dcaf91db2214cc8ee1f81a8dd63c5f"],["/post/27980.html","eb779d727dd8ed59755bceaec0edad8e"],["/post/280b588e.html","640acf2acd00bfa82272f52472471f67"],["/post/28579.html","d578e17596ca243db70ce4810c4eea46"],["/post/28877bf.html","f5aa14a09a3b585a57edc97b5a0c8e11"],["/post/28954.html","36d150951a15ff4ae307716df0472c3d"],["/post/29378.html","e03310125bcdf78fc53e6d8bbdc777a9"],["/post/29949.html","1c5492226b65a7337ce3d57c97fb7598"],["/post/2ae43b86.html","49cb510298e1567f767bc8984fc8b9e3"],["/post/2ba82a45.html","c5a8abaf6d58a01af2b1dbb2de096c0f"],["/post/2cad8b04.html","459248ff7cfbb56a56f9a2ef43b46c9c"],["/post/30072.html","c2685dbe9cf81cf03fdb4276109479fc"],["/post/30479.html","d6f30713667b729acef5ea5616f820c2"],["/post/30a5dc7e.html","c4c98613be183348d037689d93205729"],["/post/31a6b40.html","5f890e02323c7e4f845ae80ad8ed596c"],["/post/325cdbf2.html","9ea5aa3c8b92ba047332da943c5a5710"],["/post/3319ed9a.html","2993d4da1891c79cf6bd728fe77dbf2c"],["/post/3320.html","43aaeff8b2b982e0468219dbee25524c"],["/post/33cb1151.html","b8008b1d8c96ce53df765bf0555042c9"],["/post/34811d5f.html","8748c96a668b245ae708071a0edb0d41"],["/post/348d4e04.html","152f775690b1ba34036beb962f1384ed"],["/post/3526.html","f685c09599c362cb1c0401f48e283bc6"],["/post/35532.html","13d73cf605d8b94b2f09b7d39029f096"],["/post/35848.html","3e8a45897ef9530c41babde8e675b1cf"],["/post/37318.html","3c91a38af867f8f800110f35c7b9a6fc"],["/post/37663.html","5defd4ebdc2c0afbf03548c124459a84"],["/post/38035.html","54f551887a96fcd05a702cbb6cbee383"],["/post/38072.html","102c32423b621cb050a0122dfb92d0e8"],["/post/38145.html","6f179270e74275ac58bf37a0d60c7192"],["/post/39968.html","0b99937a9b6728c9f8ff0af68f8c5ec3"],["/post/3de4bc69.html","476c0421b0a762c5dc9dc0fdb0f73a53"],["/post/40583.html","863e61a7c12d79b2b3ec72e65bef6047"],["/post/40997091.html","3eaf6eeb95fabc6c102a7f6d2984858f"],["/post/41129.html","bbbc417985efaffc540c27d1574ef651"],["/post/41763.html","c639a4d1659d056c0d8fcbdb655ebe1c"],["/post/41829.html","b3f910831ddcb326ffcb4bfd6212ace7"],["/post/41840.html","1c7a6808825e499d82e0118b022f8a36"],["/post/41e39f2b.html","92f64e1fe5ecf1b6a41d5be4c788960f"],["/post/43003.html","401a56fdccbb30c5d109dcad505148d0"],["/post/43817.html","f16b46e8be76e6fd57a948136b4ee87c"],["/post/43878.html","e42b4591bc438fdb0275dbaf2594d19c"],["/post/44250.html","3870ba2eda4f1226e4bf3eaa8c8699c5"],["/post/44336.html","5f924d2ff2e919a1689feccde67540d3"],["/post/44454.html","84bd2afcd09070b600147cb8fb8ac952"],["/post/44487.html","cebe331787bcee675344925f27cf823b"],["/post/44914.html","14974f097540bd1dee47299823389183"],["/post/4551c130.html","f1914c2aba385e683acb8ccd660341ee"],["/post/455a4c92.html","30747bb37446f15d17fdc1a6dad84d8c"],["/post/46390b34.html","07cf42b3a708598304be5e70419be32e"],["/post/46466.html","dfcb5f481c68c0a925281cf63f02285f"],["/post/46925.html","03ef39cce682576e65efe2235474ff14"],["/post/47075.html","179258d6f167ee53bae151ce1d3e5c61"],["/post/48220.html","2c7cc5364cc0c4dc6cce4f9a00ee8e48"],["/post/4b1879e3.html","f849fedce25006c1537ec59d5e3d7c0b"],["/post/4c720881.html","31b113a6e067e78d3402852f91d6ae0c"],["/post/4f4fc0a1.html","7ead41851a58b92348cd61035275b849"],["/post/50daec4.html","3489b87c045b5d7d16dc9fa801ad2318"],["/post/51491.html","87a1a997803ce225e0d9cfd2586318d3"],["/post/51e63dcf.html","fd6ba5bf374ee8397a1fe9cbf643e62e"],["/post/52078.html","506de316d96d0ab8efd3335f47332c3f"],["/post/53677394.html","8dd151a66c0374640bb0021b84f2e57e"],["/post/54300.html","d7518d118714a4259041b276de3b4ce9"],["/post/54612.html","cb1505cfb3fb6353cd261a912a26a072"],["/post/54613.html","86b7b1248bdde1f48dcc50466257e4da"],["/post/54708.html","a882b17e6528d7831d135639c7cf96ea"],["/post/54778.html","4d5d1c7beddc5937ff3c1628b3e995b3"],["/post/5490.html","d6fe7f586dfd190ed502fd8c2143757c"],["/post/55046.html","1e285c006d36d139268f7339b1db36db"],["/post/56929.html","ea0700100247318763c080f35df08778"],["/post/57339.html","09982d9e8bcfcfa41bbebad39b719945"],["/post/57449.html","9074c7a027576a348ca5110a86918830"],["/post/57453.html","eab71de6e70f443347e1ff5808e100b2"],["/post/57671.html","2bac9421ec32c369a5f92daef550795b"],["/post/58313.html","ce0f73f43bbafdad52308c6165d20e1d"],["/post/58481.html","ba07fafd7f6e4c8eff5719fda3a9511b"],["/post/58986.html","d080ec5b4b5e04c9c6ff70d2672fa674"],["/post/59431.html","6beaed980f4ce4621dcb3de4e5263312"],["/post/5951da65.html","7b26dc1e7e9f73e98a36627d45276a7f"],["/post/5be7e977.html","26f64bae19a8fc2a8e15e11d9f27dceb"],["/post/5f9e4eff.html","7621e0023f5d531c5cde9d8a8bec9dff"],["/post/604b49d0.html","60fdf9499c1d1f9ef6435bb355c7b1f1"],["/post/61312.html","5ce7b973459fde4869e2a16728ef7f39"],["/post/61738.html","4499d0633171b07c5d4a05a85f73d699"],["/post/61809.html","b69596548395bc395fed1090e9c9a3c8"],["/post/61eaf19a.html","e1ef7c6a68c118ab694bc3c63c7a16d1"],["/post/63002.html","782f4eb6b1d7a4a3eb7e2da7d7ee9548"],["/post/63711.html","b4f35846edf9c4b50d9b0e225f74f5ba"],["/post/6587.html","2f793231588ec7dcfec76448cc76d1bd"],["/post/6589.html","167b247b94d6ec54f376cf914b60eaff"],["/post/67454659.html","1d3f4038232b9235c8a5455e293a5360"],["/post/6880.html","86f1b3e024b6159bd816235cfbdb720b"],["/post/6ee50502.html","afb29ebf3c78c4562a681076e57d411a"],["/post/70263071.html","5fc4a727e26540c8bd905df6992d813f"],["/post/70d4f4af.html","a362116699c84e89f205421ee0286dc3"],["/post/71038564.html","d14b5df4356c53b2ad9b5d2eeb92747e"],["/post/7119.html","d0051af1373351be7d967ef0a20fd681"],["/post/74e7fdff.html","3eacf6e304a4d3fd89f76118b9fc503c"],["/post/7502.html","8289a57d2fbc409fe1763d9eedb79f8f"],["/post/75223936.html","71ee3bdae1c16a6e66c581ac2ec4cde4"],["/post/7564.html","af8259b3fa9a48474bf02efeb652ff9c"],["/post/766f9b60.html","50883d9c538ee0195546108cad345d38"],["/post/769365ef.html","f970e649f3d8b522b6d98d4e70e2362c"],["/post/7ca31f7.html","0d7218cf517043c0296a71fc74b65618"],["/post/7d1c86da.html","a3e128f580f2ae00c17629c529700e32"],["/post/7f3bcd7f.html","2e1d59a293f39ac05fb098d95b3f0fde"],["/post/8039.html","fa8e3ef8e849d0f56090c09197a76f00"],["/post/8050.html","974e4e0a865d0f7733fe46667b51299d"],["/post/8072.html","27e05e1fc4697beb66f9edc0e580a4f7"],["/post/8274.html","d09e31e520ca1b66a0545bbcd1d5d323"],["/post/8372.html","5da068c55f01cc1da29dcb52dadaf3a5"],["/post/8498.html","8fee61fc6db2c949f0e7465ee57cd15f"],["/post/84ea90f7.html","67af367aaae6dbefddc3beb4c2cf28f0"],["/post/85b4e13b.html","f53cd60a3a3665365dda59f182501116"],["/post/8e75958d.html","113373f40eae682422033dd0006596c0"],["/post/8ecb5fd.html","234450625bfda7b53cd4011cd23f52d8"],["/post/912b2566.html","1fff7b46cf76bf5f921239292035ebe3"],["/post/9187.html","dcb842787a7bd96b00f25a9f358c0050"],["/post/9197.html","2f61ce0c77dbc5b14b54f558a7499290"],["/post/94ceb2fd.html","93a42980efc3309216c157b31258bc1b"],["/post/95495db.html","0be6ac5d4a3455c60f9dc1144042e854"],["/post/97246020.html","88068e5d8721d72e51634cb534b478fa"],["/post/9954ba8e.html","b4cf194c4024afd3d49a0b34ccbc29d6"],["/post/9d855db5.html","9eb5458e9d0ca146e176c543ed8f5516"],["/post/a3a786d6.html","86f6e073f48a0a48d8640b5f783d97a5"],["/post/a444b428.html","5b6d1e88a9985dc9e5168aef20e80292"],["/post/a50b8908.html","de070239b210fe4b8b37f161362b2ea3"],["/post/aa1eade8.html","48f177d1269d7b19994df9eea5c6871a"],["/post/ade8c6d6.html","66796de72c4fbc5a41d42335ad420a9b"],["/post/ae8362df.html","3fe6d732732f997a614be8cf0ce42122"],["/post/af3eed3c.html","89a2f9357c4678c33f6a18ea92e11270"],["/post/b4c1d206.html","45487b4e6ca2735515dc2c231393a6db"],["/post/b75632a1.html","496ad3973902bcb219e5fde44012e5bb"],["/post/bb25e9a9.html","3ee2c2af85e540c53cc99aaa41ddf1f7"],["/post/bcc68732.html","dc7d8f87cf6c03ad2473366c5797501d"],["/post/bcf345af.html","fb152163e90be61e825cd87538022134"],["/post/bd608ff7.html","b2ab11a122b567848bf435dd23eeb2f3"],["/post/c82a1c99.html","8a277f96592aeb4b087f9c024b21cd8d"],["/post/d213fc7f.html","c2610dca851b42b156c74b6e64068689"],["/post/d431fab4.html","cd8e4a2c0984e6ed8722c9970de7c21e"],["/post/d5381517.html","1b5074921c5c8754f5a5662e340655fc"],["/post/d94f88de.html","55a77d5e9ab738a60f058dc7966025bf"],["/post/e058ffd8.html","6f5c98b3ba4cf79a91dd7b1aa2964a81"],["/post/e0f8cb74.html","c5d66314ed2cc210c4d7e9fcaa7119a2"],["/post/eefe591f.html","ffd528e6e343c2431c1820739274f9de"],["/post/ef296a07.html","ab145c614f8b8844154adf0e03002159"],["/post/ef3a3fcc.html","2064a87b4ad0cc64c1dc6a3d3bf1d86b"],["/post/f201f9fd.html","5b3c655717baf660aaa840178574157a"],["/post/f79e4123.html","6ae43e6d2c2c98fa6529092039567112"],["/post/f8648a1d.html","fe9e8537b7fde6f1d2f68dcbba0d8e8b"],["/post/f89cb603.html","f6a53f1e251c24b03e9c8d4998f79293"],["/post/fa288682.html","66e337e5373e705f06e1a30ca50621eb"],["/post/fb98053e.html","4f3f8cd63526769c453bad35142b8937"],["/sw-register.js","680c5a4050d5a1eff6a6e82848b2c81b"],["/tags/AT-T/index.html","44553aab6ce530c9647466077aea1f83"],["/tags/index.html","0c29a50054a89731ab3e8b8481b81b89"],["/tags/动态规划/index.html","30bd9decaee4929f6fa6b2e097eb10d7"],["/tags/字符串/index.html","6aa5830e21c88c1be1b6f65b299b34d6"],["/tags/字符常量/index.html","f2e134269727d0c5cad1436c80aaeb9d"],["/tags/快排/index.html","142f214b1585e182a8c0472881284f50"],["/tags/排序/index.html","698291589b6242ca9d8f0c67222859c4"]];
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
