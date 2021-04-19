/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","863048c3060cec1037fbb6708998c886"],["/archives/2019/index.html","eba64fcc7f6f1dda324bc991ad1977c7"],["/archives/2020/01/index.html","d7efc0d4637ab2e08b08ea41a496f729"],["/archives/2020/01/page/2/index.html","d99b1da40a4a205000edfdfad8fed44f"],["/archives/2020/01/page/3/index.html","6b5b258514194a25d848a429099ae742"],["/archives/2020/01/page/4/index.html","0aea9924e3aa1c70eb150a5b2087e052"],["/archives/2020/01/page/5/index.html","81a7a4d820efa4246857fe942c66aafd"],["/archives/2020/01/page/6/index.html","27494b366748231cd3d2176bccbea6ad"],["/archives/2020/02/index.html","e8747d1a9a7c31f777371619c27b1561"],["/archives/2020/02/page/2/index.html","7245a6a597f63d86ffdee7aa719f8a87"],["/archives/2020/02/page/3/index.html","c77583e6aa425cf1a53d5c439285af81"],["/archives/2020/03/index.html","2dbf9931ea81e38f88d617f86bb06b16"],["/archives/2020/03/page/2/index.html","f5b18906138ed60b8af86230e6b34d34"],["/archives/2020/04/index.html","a1e12cfed25d1a8a8758798df1ccab41"],["/archives/2020/04/page/2/index.html","3250fd9855872fe363d69d08744f967e"],["/archives/2020/05/index.html","1ba4139b5cebfce80849784ba2a892af"],["/archives/2020/05/page/2/index.html","b79a689691289e535d07c068bccaacbe"],["/archives/2020/06/index.html","c2ae7017392511d08972d2e10cddb157"],["/archives/2020/07/index.html","c5f0359230a7f68ceca84a25da233ed9"],["/archives/2020/07/page/2/index.html","d401767f0fe60384f700898f15dded7f"],["/archives/2020/08/index.html","cae938f8a45e59409826d5b5ae24a854"],["/archives/2020/10/index.html","0f90e74cd3d7dc5f8316ecef3a2c15ad"],["/archives/2020/11/index.html","9284caf28826792d1be83afdcf6ab9c9"],["/archives/2020/12/index.html","eb22a779b3f163bdabc75244396dcc53"],["/archives/2020/index.html","eb4e72888e334c439b6c67a9c04f9290"],["/archives/2020/page/10/index.html","6c0713a05ec9e6f2eef249edd5a1c6eb"],["/archives/2020/page/11/index.html","8850d27279923d8aa97eacd09043b466"],["/archives/2020/page/12/index.html","3cf2a1b97c3d9568323803555a8a5dbc"],["/archives/2020/page/13/index.html","8adf9447667cb33002927cd491beedc3"],["/archives/2020/page/14/index.html","3601095c409d6e7a01dbc82ed2c44fee"],["/archives/2020/page/15/index.html","4f9f8b81a87b5da583861554ebaa1e4f"],["/archives/2020/page/16/index.html","87b5863daa7a045e6d56dd1d1c9f7efd"],["/archives/2020/page/2/index.html","e2ae196c6d5ddff3b7861206bc08d006"],["/archives/2020/page/3/index.html","96e8df0ae28e12f4cfc5891b1dde340c"],["/archives/2020/page/4/index.html","44ddd1128639e1df485887dc44fd931d"],["/archives/2020/page/5/index.html","d17397c7b72c605bda9d9c8239daf906"],["/archives/2020/page/6/index.html","60df72267af8c0ed25c87c7a0aee7e6c"],["/archives/2020/page/7/index.html","37091716df1c8d657d4fa67de54bac82"],["/archives/2020/page/8/index.html","2e051352988e4494e9ed69e349efa689"],["/archives/2020/page/9/index.html","d580ee92d601f35b464bfb0b4a6ab777"],["/archives/2021/01/index.html","58c239e95368e1ffbcf7e1b9cbcbb530"],["/archives/2021/02/index.html","6175f7802ebf575c4742dc31f718e2d9"],["/archives/2021/03/index.html","4bab482a5572fe007c54fc113bfcf238"],["/archives/2021/04/index.html","716c35113a40238cea5b62ee6da70d8a"],["/archives/2021/index.html","1bed92fa5663ed580e50fcc0392da5d8"],["/archives/2021/page/2/index.html","9e756b5d25e23592a493ce1d785afa39"],["/archives/index.html","6b04997e1104bb02fe1f61d38d55d588"],["/archives/page/10/index.html","df5cd69ae53448741775dea39d047550"],["/archives/page/11/index.html","66c49ef4b3348ed755a6c80442bdecc6"],["/archives/page/12/index.html","d7b9b44d014b9c1ed38c04d2b8d41fd1"],["/archives/page/13/index.html","7e409253482f6c9b96352413899a6fce"],["/archives/page/14/index.html","db07f156cc9d222d475a34f3746ae9d6"],["/archives/page/15/index.html","3b493ec431be62b348bbb73b2999cb99"],["/archives/page/16/index.html","8a383ebbcd8b504fa48599509f81cd3f"],["/archives/page/17/index.html","c2b4af71c8a0dc210010eb6a253050a3"],["/archives/page/18/index.html","8f55686720c9ef44569c84ff5a6457e1"],["/archives/page/19/index.html","bf2669301d87f15614ac1d41a3a1051a"],["/archives/page/2/index.html","7bf52ef45486fcbdcdf66527b937b576"],["/archives/page/3/index.html","59cf780fec8fc36f7dd70b78b0e6dd37"],["/archives/page/4/index.html","68bbabc6f58a7d41064e9a3c2e7c5af8"],["/archives/page/5/index.html","97bbc62e77e3c612cf2b4f839a3ae2fc"],["/archives/page/6/index.html","80d89ec87110138da7e50bcd408227d9"],["/archives/page/7/index.html","40bb8c56a13079256b7d90e8ab0a4b5b"],["/archives/page/8/index.html","a18b12e37208b2e9385aacf28ce2838b"],["/archives/page/9/index.html","c9166ff2d0bc9fec9ff2a380421f2516"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","d840b2ec4f71aebf13f6f285ddc89c8d"],["/categories/Linux/page/2/index.html","3a5a2c65373fcc1d0f179359075cd95e"],["/categories/Python/index.html","a0d6ea874b7cc076fb07eaf5c0217786"],["/categories/Unity/index.html","6f669cccc886ff440156af6a5b776bcc"],["/categories/c/index.html","bc06b79e0896c9b5e52bb8ae95493d84"],["/categories/html/index.html","2a9867e38be3920db3ed5525e7d810e0"],["/categories/index.html","cc7fbaea2c572645f182a7f52d9db548"],["/categories/java/index.html","e0c4779114427f648bf9d3dedec22cd1"],["/categories/java/page/2/index.html","f6f17d722178258a5b39c6f45900dc99"],["/categories/java/page/3/index.html","a6ccce01c7d3070fa0f2c0ec85238981"],["/categories/js/index.html","239ad715af99ede999e156acbd10a0b0"],["/categories/next/index.html","01b1092809ac0701dfb27e5409570049"],["/categories/stl/index.html","c2038c64edd403452ee787286c0d3f24"],["/categories/windows/index.html","f5d84312294c4f517d8d73c27ebbbf0b"],["/categories/基础/c/index.html","0c83d5f7211c58c06d54d44b9aebe487"],["/categories/基础/index.html","e9375da125c69c179c78d70bf2d19fbd"],["/categories/基础/page/2/index.html","f07649ecc0ad7f70bf43957af3104362"],["/categories/并行/index.html","41483a16a8d6cf1fd92fe7aea80cbf69"],["/categories/数学/index.html","17475f63d2c3490c5250000fe9785a3b"],["/categories/数学/概率论/index.html","9b0f1c31795619175700344751ba2757"],["/categories/数据库/MySQL/index.html","2871e03a8eebfe227a6b4577cd2874b2"],["/categories/数据库/index.html","ad819cd8dc165a5ff88f1849e1a8be2d"],["/categories/数据结构/index.html","b9d17188c8d89b659c5c31e67a856cd8"],["/categories/数据结构/算法/index.html","490f4906d57605f735b711ffd136eaa5"],["/categories/机器学习/index.html","766f0fe834c450a231526212c13f03e4"],["/categories/杂项/index.html","6f60f8db71ed6a631f9a8b465d0d57c4"],["/categories/汇编/AT-T/index.html","ca0fd016287c0cc1a47e0c406b249dc9"],["/categories/汇编/index.html","16879fec387e19dd2bbe4adc454c1d90"],["/categories/汇编/page/2/index.html","923f24c6e308a0caf7dad3d256d110bb"],["/categories/汇编/page/3/index.html","933e51cb342c49dbb3e22e5793136a08"],["/categories/算法/index.html","f63b963cf00d2c19be1a593b37000166"],["/categories/算法/page/2/index.html","e3e99d2e4f55925487d2eb06824eaadb"],["/categories/算法/page/3/index.html","7a0eaf333d8de22cec0eee38e0e74196"],["/categories/网络/index.html","a802c6a322c8a61baffd458cca5b4963"],["/categories/计算机系统基础/index.html","5c856e77a144782a4591f535ecfc7980"],["/categories/计算机系统基础/page/2/index.html","cd5d70c0a9dd915a292393fa99c6dd62"],["/categories/逆向/index.html","41939d403d65b8715db9f60f5907b724"],["/categories/逻辑电路/index.html","8262d3a4e5ac4ed240071338c32afa89"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","99d2e05805dce9ae2f36041643c299bc"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/HTTP1.jpg","30e1bea7769f2cec34130f180904cf65"],["/images/InkedInked组合逻辑设计15_LI.jpg","20358d0724cbb38cf7ad4897cd252a4d"],["/images/Inked组合逻辑电路13_LI.jpg","b3be5fab7d61b73a3fea5e2692d7de5e"],["/images/Inked组合逻辑设计14_LI.jpg","e05debbb516b45c1bf251c25ece469f0"],["/images/Inked组合逻辑设计15_LI.jpg","1da4e28a4cd3fc4c11e7ab716709c210"],["/images/MPI编程1.png","ed530f67b0e7e0f33df20577b39d7247"],["/images/MPI通信2.png","ce919e1ba147cb367745fc829c2e7fac"],["/images/PE文件1.jpg","9f673b828bd69f07e1a3c646ecd4367c"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/RNN8.jpg","d0a7f6b9ccef6c87b259b60e8af4cfed"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/javascript1.png","dd3499b8d6e5e01904c1e8b3f50e45aa"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/java集合_列表_队列_映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-19.png","c944df9f2f13e0cab40c3c2e64bbaff6"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-20.png","e150eef87d8433c63edc61fa43d1f981"],["/images/pasted-21.png","f22837165193588f27a249a02eea4524"],["/images/pasted-22.png","73dd827209b5bc51cbdaf6be23e073d1"],["/images/pasted-23.png","3858fa45b7a7c0f6c41e238dae035da9"],["/images/pasted-24.png","12dce347bf4f7677e495cde27b048c89"],["/images/pasted-25.png","22416169052b69aa6bd62720d0d8d3a2"],["/images/pasted-26.png","f1a8c482811b2e822841100f69681455"],["/images/pasted-27.png","17984ab0385473e02430061c5832fc19"],["/images/pasted-28.png","44e682ad4bfbf2b20343ce55ed877d8a"],["/images/pasted-29.png","a60a4fc7812f20078e4e6b5bb6b07721"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-30.png","ee101ea21972b3ab71b3e8cbd62fedcd"],["/images/pasted-31.png","4759294af3a90a1a857124f247a4d777"],["/images/pasted-32.png","805ca0a1863b73f5ed92f042c12df61a"],["/images/pasted-33.png","730864390853bf56ccb93a40adf61026"],["/images/pasted-34.png","7a49f9e559140600426520aeb28ec206"],["/images/pasted-35.png","29c1357596235d6bfd7f42bd809d7e39"],["/images/pasted-36.png","f84229b3658edd6fbc1054af9f409cd7"],["/images/pasted-37.png","bcd95f06c4879b597118a2eef82a63b3"],["/images/pasted-38.png","869d087e64b3af39a3782c82263f2ab3"],["/images/pasted-39.png","163762097154056aef2aab69be0cb57f"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-40.png","ef974e633e6529c0fef054ba0040e62f"],["/images/pasted-41.png","91c939f5991ecdf3981be7af94d4403f"],["/images/pasted-42.png","29b1481876fbe1b1326095fd092a98ad"],["/images/pasted-43.png","58b98d4645fcfbb023c2c312ab67d1f1"],["/images/pasted-44.png","086c1d8ff6cde02cfdd23ec81a475da0"],["/images/pasted-45.png","aa7d2deb56c2c3fdbeefc8865c670e81"],["/images/pasted-46.png","0e239518ed6cd922814d0fc70e39ab66"],["/images/pasted-47.png","af0c5ad28140305a6240fbec7c396d4c"],["/images/pasted-48.png","93fcba3560d940d48448135a02dcbb13"],["/images/pasted-49.png","93fcba3560d940d48448135a02dcbb13"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-50.png","4072cb3b9bfa4f91f35539faa74f2c6a"],["/images/pasted-51.png","3a195c159e35be6babd48aac5bf2de2b"],["/images/pasted-52.png","21346633be28fb02dd3d04da0e464d0b"],["/images/pasted-53.png","d522b3a69437b1a6a6eb2a21fc0fe9fe"],["/images/pasted-54.png","33eba22b1ccef5f0fa21c742ce6ebfa1"],["/images/pasted-55.png","f755a395df963b7bf6fa9cc0fb7ba40c"],["/images/pasted-56.png","f755a395df963b7bf6fa9cc0fb7ba40c"],["/images/pasted-57.png","c9a60834fbae840ea37440adc6c21af1"],["/images/pasted-58.png","38a77ba94510e9dd232a216180203a5c"],["/images/pasted-59.png","9c7af8544f1c33032032a46937456458"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-60.png","a2c19835599a9e7057611117f40505fd"],["/images/pasted-61.png","45ce34e736699e3f0ccab20d84de1ec5"],["/images/pasted-62.png","45ce34e736699e3f0ccab20d84de1ec5"],["/images/pasted-63.png","ca5dfdd8338d587c32537ef631051a1f"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/关系数据库模型1.jpg","2b0899e613f5771fc03a5397e513d4de"],["/images/关系数据库模型2.jpg","e41af0d63cba09871ef13f23f87b758c"],["/images/关系数据库模型3.jpg","e908ef253ca12548f359a3cb2206ef68"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/字符串匹配2.png","a2178ecdbd4061940f57c5ad7a3d3a29"],["/images/字符串匹配3.jpg","62ad48f6df4067ac8ba78fae289aec41"],["/images/应用层与HTTP协议3.jpg","9f8dd77e70aa4f6ceb5f6ff52999486c"],["/images/应用层与HTTP协议4.jpg","2d79dee035b8a557b74c312cb88790b7"],["/images/应用层与HTTP协议5.gif","a669d1cf7e5033dd80ff8544273c0f1d"],["/images/应用层与HTTP协议6.jpg","b7dc39f7cc8f5e8fce7625aaf9639726"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/引用层与HTTP协议2.png","87559bf7ba74bffe37c156d4ac8173ec"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/无线网络1.png","8ae03216e1d41f3fa5116ccec5014077"],["/images/无线网络2.jpg","de2fc3016d85c8bcd272dd8bbc91e794"],["/images/硬件描述语言6.png","52e2a10422fba145bda8ceb7b160e12c"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/组合逻辑电路13.jpg","7faf9b4790ee7c7c34d9ade4baa2b220"],["/images/组合逻辑设计1.jpg","bfe7e1b6ccb75263fb30888483d68101"],["/images/组合逻辑设计10.jpg","052ca3cdf73cdf7c48f6556b59d2f4a1"],["/images/组合逻辑设计11.jpg","eedf7e7aae5c80eb37b78ad557f436ba"],["/images/组合逻辑设计12.jpg","dcdb202455ad340039025a839b592abb"],["/images/组合逻辑设计15.png","0ba1c8f1302cd5d6f449fedcc5c20dc4"],["/images/组合逻辑设计19.png","0e52bc0b16115886ba8de1aa4eec1949"],["/images/组合逻辑设计2.jpg","08d768b88a5013165266a00253dc3e9c"],["/images/组合逻辑设计22.png","d18576769cc62d450b2f0268343c9e93"],["/images/组合逻辑设计3.jpg","b4529ada409ecf161ab2dea9071361b2"],["/images/网络层1.jpg","1d4233d4673b7f420ad697652807a1c4"],["/images/网络层2.png","43ea2f9a0123b16603fda74fe7a129e8"],["/images/网络层3.jpg","cc17d38c80d7e7d2b330af541458d8c4"],["/images/网络层5.jpg","fefce8be7f2ebbac1c7972af1c14edad"],["/images/网络层6.jpg","bed91d30f37c2febf4fd09c2d4b8b2cb"],["/images/网络层7.jpg","4bce5f4cba4e1703e36b6d12fd649574"],["/images/网络层8.jpg","84ba3d5cd61aea680cf20fa55d0cdedd"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/运输层.jpg","5b0a17debdd2b880203ee18d4779c5ad"],["/images/运输层3.jpg","b9a70cc24bc81ccf9f94770936a7dd50"],["/images/运输层4.jpg","67b41ea674abb2d6d422639593c0acbd"],["/images/运输层5.jpg","570ddaa64331a62f84e97fd6dc96d15a"],["/images/逻辑门1.jpg","756745dfdf1368dbdb3f03f308a79e1f"],["/images/逻辑门2.jpg","6f66eb9c805b6a8a53368d6f6a01c218"],["/images/逻辑门3.jpg","7b86be428d777d6a77261aaf98f601e1"],["/images/逻辑门4.jpg","765361cad7db7efe40550d357a1c29ea"],["/images/逻辑门5.jpg","e2f487511c4187e76376444309e87adc"],["/images/逻辑门6.jpg","7addfa1723cba8a5b0799af8ee29f3fb"],["/images/逻辑门7.jpg","7db86a615fdb929ba55aa75172957824"],["/images/逻辑门8.jpg","70f5e2d4b12d871a36e843755204fc03"],["/images/逻辑门9.jpg","e05912c381732bb5e7537d744f599f96"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/链路层1.jpg","2f8c7cb102f9eccf14fcacf870e143f0"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","ccd3f4dc7e1a0ce62fd3f8dd76fded08"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","4977b712f93a9635cc20292ba43b1334"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/mychange.js","824ebe97d4450653e930dc36dd48d80b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/page/10/index.html","81034e15b1dce02016a45f35f653eafd"],["/page/11/index.html","0c7a9e7449d7abbd91543c79d7323e54"],["/page/12/index.html","c32c5ce1ca1a955c126b4098a2ca59a9"],["/page/13/index.html","b165ce605b4430fc9aefd907db3d5139"],["/page/14/index.html","23179773316ded94207e383647f85301"],["/page/15/index.html","a164794148b3cac51974a54758cae66a"],["/page/16/index.html","4c78e8891f9f5d3bc646657e9322bc63"],["/page/17/index.html","f39fbfee895e0d94c47d28ae2b63b8f5"],["/page/18/index.html","44b387a09f71fcd66b71bf8219efce7a"],["/page/19/index.html","5ce37bf36fc074b48f967fd8c76e47c4"],["/page/2/index.html","9880fd56a03371e2517d7152474f63d5"],["/page/3/index.html","2b66226ce9116d52d891849c365f089a"],["/page/4/index.html","eda2a52c1a4c8482f0fc4fa1759582bf"],["/page/5/index.html","4e23e6e057a6c67da2de77dbb3b9466f"],["/page/6/index.html","be0af56e905b6486babbcdddfadfb35b"],["/page/7/index.html","fafca1d569b2e8e49a29c48bc3f20e9e"],["/page/8/index.html","15d960e2535fdbf7086f2dd5cc2b2499"],["/page/9/index.html","02212a9b957920a2878721cb14e42bae"],["/post/10919.html","e55eae5e7e93e615a55e53391e122111"],["/post/11051.html","1d5aa1d356917c8ca4b462cc8f1ed66e"],["/post/11306.html","d880395a8cf37fb4e53ebab19b10b0ed"],["/post/11491.html","4d00ab544cacbdb52b32f2bd81cc9f36"],["/post/11799.html","3a9d27c345fc3283d9c1e9c41386efea"],["/post/12334.html","3c30a8357115999f153e8e4c13374915"],["/post/1326.html","705f0849a13e9a8e1cdc8a396525a16a"],["/post/14379.html","e07d9eb6f6ba80adb3f9ff11fc296a0b"],["/post/14511.html","eaafa65d549e60c96e4f134235f016c3"],["/post/15201.html","29165a50886502167db0a888c2ea853d"],["/post/15425.html","6484f9086e119cef269fd1bd83404f44"],["/post/16107.html","b0341d3274b1445d4653c5a0eefac10e"],["/post/16e2846c.html","3e67374ce33f615f04dac3dfa1139b04"],["/post/17862176.html","0ebbf891a6b07045f90c21dc77b381e8"],["/post/17ad67a8.html","6d3d1fdaa9442528ff6ff529eae0aa67"],["/post/18431.html","5f44ceb31bc5ebb0514661ce015c6a48"],["/post/18912.html","0f5611f3c9d8d0edf1d202e5cbcd51f9"],["/post/1b9c8662.html","8c3b0b105e700e6557e956a1c0fa9c5e"],["/post/20198.html","5b05bd832b1da826edcf85622ae21519"],["/post/20ff5ccb.html","291f2aac311cf64cea003ad1af68eae8"],["/post/21624.html","f6f9ee5c235b020858b06364ce397312"],["/post/2170659a.html","a51340a3801e6d6a36a973b9526791d9"],["/post/22102.html","89044e1122ce10aba22e66b13b7cb379"],["/post/22493.html","b50b30efaf6061c60ebdaf089435044e"],["/post/235252ea.html","b18df1e4e97cf9b409bfaa8de43423ef"],["/post/25699.html","94008f6808a77e724a789b1c2cb40c84"],["/post/2647.html","6a85e9dbb7d8838ad71f3a411f86cd3e"],["/post/26477.html","feb7a6f4946b59c527cf5e0b270f802a"],["/post/26671.html","b107909f635f22aa2e1182634175823f"],["/post/26737.html","61aa2b2686fdf4846b909c912e39d73f"],["/post/27045.html","7672c7d90e70e5612c79209ad9f8f137"],["/post/27621.html","4d75c4a32176049b6fdcc6cc8323be24"],["/post/27890.html","69aae14031f7167ad7ea36d0be12aa07"],["/post/27980.html","a9be59366ebcf5b08cbc98239b5f28e6"],["/post/280b588e.html","668d3c83b9ed2366b21cf6812b6a3bf2"],["/post/28579.html","b8c5b1f9825fdd050436f0bbe1ac3bef"],["/post/28877bf.html","e00a9926e50547c729f62357951672a1"],["/post/28954.html","9bfcf7d8f0f2153e1a73ad4cf74c2fa3"],["/post/29378.html","5cf1a4b95ab1e11dd8359c194b5feff4"],["/post/29949.html","cd0de03df6240ebac497f2e946deda10"],["/post/2ae43b86.html","0b5ba6b695ac82ea508719b6f282bee5"],["/post/2ba82a45.html","adc5844ed4dada1222256af070b85e37"],["/post/2cad8b04.html","2a8b99cc76a581a276fadff6f4afbdfd"],["/post/30072.html","6c95bc7a61884fe94779e8e0ed424992"],["/post/30479.html","61d1650aaa22c6ed6998a29ab68fa5e0"],["/post/31a6b40.html","b610bc05c21ac4350d34d7ccac5ce5ec"],["/post/325cdbf2.html","52bdcac06ee44bffad69890480eb9cae"],["/post/3319ed9a.html","256c2025470074647695566b49c92c75"],["/post/3320.html","37790fce64a9fa20e534876cd3e743ca"],["/post/33cb1151.html","f282eca031595f6a543d5f364c4aad1d"],["/post/34811d5f.html","09d846b8c2b44db446994b70c8c456b8"],["/post/348d4e04.html","d5fed679c310ab8b1bc3546c550ad9d4"],["/post/3526.html","081ebaa26d2f196fb4d33d15c8c72f25"],["/post/35532.html","772e0a1e29d82dbb6d3fea975460decf"],["/post/35848.html","2ee38ad03ed78b0964f997b8a06dc787"],["/post/37318.html","346880b9b164f875db12e4b8477533dd"],["/post/37663.html","4feafbf38cbcc9f4dc736bdf3b0eb98c"],["/post/38035.html","5c307e2e4a4eca6ea1da4fb078d5b2ad"],["/post/38072.html","7d5830d86ad2ff74e758cd3e75f99bbb"],["/post/38145.html","4ed0b768dc747858e8a489f434061735"],["/post/39968.html","599f6de2a87f9877ee46e817df7acad9"],["/post/3de4bc69.html","9dac6b726d3505d22a68cd5feff2e551"],["/post/40583.html","5f1a3c196b13f80645eb6444c367babd"],["/post/40997091.html","977698a97cc5684b4719a6e5d2c4e2fd"],["/post/41129.html","ca50086c10dacf545fb6547813be19d0"],["/post/41763.html","e8a37059a9261c4d43ef09078638d816"],["/post/41829.html","e551b2653f5265481de29f03e66bc682"],["/post/41840.html","2ba04385788635eecc69f20a370cd89a"],["/post/41e39f2b.html","da9220713f40fc422d29b729480cd8b5"],["/post/43817.html","dc74b4b330146e82ebf3302dbce5bafd"],["/post/43878.html","2e49b2ec703c2d7325b5f3bb6c903ca9"],["/post/44250.html","47551f8e4ea24b85ebf4cf8296ca134e"],["/post/44336.html","dd55911bee9c4cb45b5874e19fcdddef"],["/post/44454.html","089bcd675f68f8f3564fcf7f8e52442f"],["/post/44487.html","8a19b8baefe2f9fb60bdd79cf588d805"],["/post/44914.html","9c2a32794292d9060015a1e7bf27a86c"],["/post/4551c130.html","a403f2810b461973d1cb66ba88653d02"],["/post/455a4c92.html","fab8fb8fecd9d5154afb8902583e0708"],["/post/46390b34.html","bbd66fd41eaab4a75c22c46658394df9"],["/post/46466.html","52189c876a5080df3a150163fc11cc08"],["/post/46925.html","ed1baf294b9017c97d456cc910b1bf92"],["/post/47075.html","db8d7954b5d77ef6d8a75fec4c495a5c"],["/post/48220.html","94f4768e38fbc37c987d19baca4a1576"],["/post/4b1879e3.html","73a57651f6362dbb287c6215ce32d9d0"],["/post/4c720881.html","c9a66a18ff2746ff06c18e1743b08d7f"],["/post/4f4fc0a1.html","a49fa3d54117ee45419f2ef72fa76c97"],["/post/50daec4.html","9e86af213f3e7ab410b101e91dd98f6f"],["/post/51491.html","fa91741a02d00d6c1cd930658a3f7de5"],["/post/51e63dcf.html","4f9d29fb7e185103c155925efb34b427"],["/post/52078.html","570adde619319a3cb379d800712449c5"],["/post/53677394.html","0b4f47047e5997a70a750cf10a01d49c"],["/post/54300.html","bdf3541332417733232b5ea70e4b55b9"],["/post/54612.html","96aa32dad93ac565c683ba29a509de31"],["/post/54613.html","85d2b8b3167542bbe5644aa95f82a19c"],["/post/54708.html","41381a13d5a37121b67520453a074658"],["/post/54778.html","5b4960e239643553f9636cbcbe8f7e42"],["/post/5490.html","6b5cc63ee563d4fd1e8a9238d15d5089"],["/post/55046.html","484b262413c727cd35d5efeb354d977e"],["/post/56929.html","aa03e03b96d77d5c16c46e5ed465efb8"],["/post/57339.html","109afc4fe7b5097b2d65b09d42fd8303"],["/post/57449.html","e96f0db0f5ed76ef7d4f2737269df5bd"],["/post/57453.html","5424a0fdf58dae883cbcb4cff78e88f9"],["/post/57671.html","570254f6789a460e161641b36eb1a63a"],["/post/58313.html","638e84d9de40c79a3f88bba156cd7515"],["/post/58481.html","d2ddfcff76d1588d9c4fa19403adbd02"],["/post/58986.html","ba871b37db882a10a6064e0f6d31b262"],["/post/59431.html","561f50a6b8acb78fa665343099894f6b"],["/post/5951da65.html","8ca8e6ca8f81ae234a571d804f220064"],["/post/5be7e977.html","faae9c9f4233836eee51b082263ac1ae"],["/post/5f9e4eff.html","28255a9a2f04380f1a589761bb29a7f9"],["/post/604b49d0.html","59da12216dd611145116de28eb8eec7a"],["/post/61312.html","717afce4531a6698ddaedf3b8e68c7b0"],["/post/61738.html","53549b8051dfdf44be25f64929514e0b"],["/post/61809.html","609681d2c19cf669f607b622df4fae03"],["/post/61eaf19a.html","ac96bb4c5f5b8df3804728fa3ef298c4"],["/post/63002.html","e8f474f3545cab55de677a9c7129ce74"],["/post/63711.html","943abf854ae8274849f01859efa4f58e"],["/post/6587.html","1544b2bc02ad99e1bb334afd2de02c7b"],["/post/6589.html","d95690689569d4f7c0b41c7aee7f4fd2"],["/post/67454659.html","6e4ee5634d1c8e9d3fdb21ac78286d12"],["/post/6880.html","3bb1f30c7781cd43fce90de2c6a22f7e"],["/post/6ee50502.html","b5cf5471be2eb9206455d5223aeb29f3"],["/post/70263071.html","1649be695ad455fd1fd1e7117cb4caab"],["/post/70d4f4af.html","ba6f0310741fc77f3e1b63161554b474"],["/post/71038564.html","dd9789e3c743b61c3a01f5159210147b"],["/post/7119.html","94676958af121717b9ee88c8e82f711d"],["/post/74e7fdff.html","9d44d17f2e7dcbd1ade2f8682c676fd7"],["/post/7502.html","60f39b39e09bbde394b65574842455bc"],["/post/75223936.html","1fe1bd804fd00bcc9bd10537c8bdd22b"],["/post/7564.html","5f61bacfd33d65e1480fc94d969afb27"],["/post/766f9b60.html","6dcc768eda6e4b757ba9d9e6f0197437"],["/post/769365ef.html","13c36283bbcdc5a20b87377027a2f0d7"],["/post/7ca31f7.html","8ae6f96885195f1d2364be8f3fd5967c"],["/post/7d1c86da.html","7cc6ffb8c5efb51085867c6ad4d3a56e"],["/post/7f3bcd7f.html","f57a42f0ad08a667792e4af934ee8e2d"],["/post/8039.html","0da9266292c3d6cf5dcdcefe2eab322e"],["/post/8050.html","c1b5bcdf50a36b5d5fac7877b185186b"],["/post/8072.html","6ec9861212695a501d64ce9e9339ee6d"],["/post/8274.html","6afcce9c75bc6ae9b2bac45f0563233d"],["/post/8372.html","d276033ee9c2019c62a1b9403cf50f5b"],["/post/8498.html","1faf18d3299700f1308ae3eb80d5129b"],["/post/84ea90f7.html","064984bbfc04913f053c59d6c62d6133"],["/post/85b4e13b.html","34a890af7ad113daa2fe8f876cc3c09b"],["/post/8e75958d.html","2b737268ad1291fd14d91dae411c345d"],["/post/912b2566.html","22f0d4e71d2861aeb28f988d8e4f6024"],["/post/9187.html","2e89dd5c0ec7b26c696d2718ea8c43fc"],["/post/9197.html","a1284bbf92c90584ace474bce351b31f"],["/post/94ceb2fd.html","42813b0c29c83dd63413b8646bbca2e1"],["/post/95495db.html","0cc308756c7e6e3b0cbf7965b95e6386"],["/post/97246020.html","af6a7d5af05fc523d8c352162a46be33"],["/post/9954ba8e.html","f3c14e751ad02c08cb3d79e85c3628f3"],["/post/9d855db5.html","4fda6643b1c4a383105d7672ec7358b2"],["/post/a3a786d6.html","5fbdacf48dd63e9840861cec02db63ae"],["/post/a444b428.html","c8e08d46006d844b490ee6a33af6e325"],["/post/a50b8908.html","078ab4ee0fc388021c6c07b1cccfa08d"],["/post/aa1eade8.html","c8be3ae2abfd489763262ace18630cee"],["/post/ade8c6d6.html","32ef255bcc1aa13e5d0a1540f8342cd5"],["/post/ae8362df.html","68eb93fa3936a191636699f0b49a7583"],["/post/af3eed3c.html","9cbeb4591b549c9f3e2d10c3ea70fb6d"],["/post/b4c1d206.html","cd2358ebc9e2e90c3cd59ef4cf9b92af"],["/post/b75632a1.html","be52599a9139c07fc7aa2a646a30fffa"],["/post/bb25e9a9.html","2054fd32fa497a86c42a38feada3b83d"],["/post/bcc68732.html","2d8b3a0f7182b8803b6784b7291e7129"],["/post/bcf345af.html","4c1ae6a9642cfc58f41dbb26df45c48f"],["/post/bd608ff7.html","591177c200291d7d3d6712235becab72"],["/post/c82a1c99.html","a3004004740c2919e4fa11fcf33549b0"],["/post/d213fc7f.html","01fe8ec94d2f3154b71e908f49ff1a28"],["/post/d431fab4.html","cceb56b5a2d950c71ca487894c1fdc91"],["/post/d5381517.html","f6ff92697147357f3e773d19041b3fcd"],["/post/d94f88de.html","af1eed6c8c06733d7fc58e5d88ce9ef4"],["/post/e058ffd8.html","a95bb6ce0e72ee7a45e98e68f691dd36"],["/post/e0f8cb74.html","207b413c1bbbb4d1b18d0ca0b479bab7"],["/post/eefe591f.html","49f823054ba42c0dea76dade2c6b72e5"],["/post/ef296a07.html","3fae3871a4d36d4912e23f96e91166cf"],["/post/ef3a3fcc.html","3fb6c65242f4e8b09922d9e94277cd4b"],["/post/f201f9fd.html","971620c90613e0cfb4c5d06f9de34820"],["/post/f79e4123.html","473337d3c147a363c78941e156b94087"],["/post/f8648a1d.html","59b972dc07773eb6a9b16b713e0f05c4"],["/post/f89cb603.html","b7dce1857726f644998cd74c3e425cf6"],["/post/fa288682.html","91582469980b173add2fd89978927552"],["/post/fb98053e.html","4c6c420563ac9c5e1bfdb401f0e79814"],["/sw-register.js","c7e6c0583ed9158abd43d0287978222b"],["/tags/AT-T/index.html","a055b8745247e89ecbeacd8fb79fe33f"],["/tags/index.html","1c3b87446a99c68cd18ff7424bb67c94"],["/tags/动态规划/index.html","635313d7b2d93cf08177642237e66f50"],["/tags/字符串/index.html","afe863b6f30afaaa4706e094e2101364"],["/tags/字符常量/index.html","9404993e53646207347792a20b66b76c"],["/tags/快排/index.html","6ed7e77b90767dd87aa93434afbd1869"],["/tags/排序/index.html","81bd6ceb75b390555d8df3218f1c8c13"]];
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
