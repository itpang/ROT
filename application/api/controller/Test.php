<?php


namespace app\api\controller;


class Test extends ApiBase
{
    public $like_not_need_login = ['print'];

    public function print()
    {
        $key    = 'HJLXEoGk2758';                        //客户授权key
        $secret = '52b09a0f84dc43029b3cd1a9897ad895';    //授权secret
        $tmpid  = '036c84c1e13940d4932491f5cfda716b';    //电子面单模板编码
        $siid   = 'KX100L2104180314'; //设备编号

        // 当前时间戳
        list($msec, $sec) = explode(' ', microtime());
        $t = (float)sprintf('%.0f', (floatval($msec) + floatval($sec)) * 1000);

        // 请求参数
        $param = array (
            'type'       => '10',               //业务类型，默认为10

            'partnerId'  => '',                 //电子面单客户账户或月结账号
            'partnerKey' => '',                 //电子面单密码

            'net'        => '顺丰速运',          //收件网点名称,由快递公司当地网点分配
            'kuaidicom'  => 'shunfeng',         //快递公司的编码
            'tempid'  => $tmpid,                //电子面单模板编码

            'siid'    => $siid,                 //设备编码

            'cargo'   => '文件',                //物品名称
            'count'   => 1,                     //物品总数量
            'weight'  => '1kg',                 //物品总重量
            'payType' => 'SHIPPER',             //支付方式
            'expType' => '标准快递',             //快递类型: 标准快递(默认)、顺丰特惠、EMS经济
            'remark'  => '测试,无需取件',         //备注
            // 收件人信息
            'recMan' => array (
                'name'      => '小红测试',
                'mobile'    => '18927154977',
                'printAddr' => '广东省广州市番禺区厦滘启梦广场创业广场2楼201室',
            ),
            //寄件人信息
            'sendMan' => array (
                'name'      => '小蓝测试',
                'mobile'    => '15637228238',
                'printAddr' => '广东省深圳市南山区科技南十二路金蝶软件园B座5楼',
            )
        );

        //请求参数
        $post_data = array();
        $post_data["param"] = json_encode($param, JSON_UNESCAPED_UNICODE);
        $post_data["key"] = $key;
        $post_data["t"] = $t;
        $sign = md5($post_data["param"].$t.$key.$secret);
        $post_data["sign"] = strtoupper($sign);

        $url = 'http://poll.kuaidi100.com/printapi/printtask.do?method=eOrder';    //电子面单打印请求地址

        //发送post请求
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post_data));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $result = curl_exec($ch);
        $data = json_decode($result);

        echo '<br/><br/>返回数据<br/>';
        echo var_dump($data);
    }
}