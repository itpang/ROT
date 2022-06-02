<?php
// +----------------------------------------------------------------------
// | likeshop开源商城系统
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | gitee下载：https://gitee.com/likeshop_gitee
// | github下载：https://github.com/likeshop-github
// | 访问官网：https://www.likeshop.cn
// | 访问社区：https://home.likeshop.cn
// | 访问手册：http://doc.likeshop.cn
// | 微信公众号：likeshop技术社区
// | likeshop系列产品在gitee、github等公开渠道开源版本可免费商用，未经许可不能去除前后端官方版权标识
// |  likeshop系列产品收费版本务必购买商业授权，购买去版权授权后，方可去除前后端官方版权标识
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | likeshop团队版权所有并拥有最终解释权
// +----------------------------------------------------------------------
// | author: likeshop.cn.team
// +----------------------------------------------------------------------

namespace app\api\logic;


use app\common\model\SelffetchShop;
use app\common\server\ConfigServer;

class SelffetchShopLogic
{
    /**
     * @notes 查看自提门店列表
     * @param $params
     * @param $page
     * @param $size
     * @return array
     * @author ljj
     * @date 2021/8/24 4:58 下午
     */
    public static function lists($params, $page, $size)
    {
        $coordinate = convert_gcj02_to_bd09($params['latitude'], $params['longitude']);
        $longitude = $coordinate['lng'];
        $latitude = $coordinate['lat'];
        $distance = "round((6378.138*2*asin(sqrt(pow(sin(( {$latitude} *pi()/180-latitude*pi()/180)/2),2)+cos( {$latitude} *pi()/180)*cos(latitude*pi()/180)* pow(sin(( {$longitude} *pi()/180-longitude*pi()/180)/2),2)))*1000))/1000";

        $count = SelffetchShop::field(['id' => 'id', 'name' => 'name', $distance => 'distance','mobile' => 'mobile', 'business_start_time' => 'business_start_time','business_end_time' => 'business_end_time','province' => 'province','city' => 'city','district' => 'district','address' => 'address','longitude' => 'longitude','latitude' => 'latitude'])->where(['del'=>0,'status'=>1])->count();

        $lists = SelffetchShop::field(['id' => 'id', 'name' => 'name', $distance => 'distance','mobile' => 'mobile', 'business_start_time' => 'business_start_time','business_end_time' => 'business_end_time','province' => 'province','city' => 'city','district' => 'district','address' => 'address','longitude' => 'longitude','latitude' => 'latitude'])
            ->append(['shop_address'])
            ->hidden(['province','city','district','address'])
            ->where(['del'=>0,'status'=>1])
            ->order(['distance' => 'asc'])
            ->page($page, $size)
            ->select();

        foreach ($lists as &$item) {
            $item['distance'] = round($item['distance'], 2) . 'km';
            $coordinate = Convert_BD09_To_GCJ02($item['latitude'], $item['longitude']);
            $item['longitude'] = $coordinate['lng'];
            $item['latitude'] = $coordinate['lat'];
            $item['business_status'] = 1;
//            if (strtotime($item['business_start_time']) <= time() && strtotime($item['business_end_time']) >= time()) {
//                $item['business_status'] = 1;
//            }
        }

        return [
            'list' => $lists,
            'count' => $count,
            'page' => $page,
            'size' => $size,
            'more' => is_more($count, $page, $size)
        ];
    }

    /**
     * @notes 获取百度地图密钥
     * @return array
     * @author ljj
     * @date 2021/8/24 5:01 下午
     */
    public static function getBaiduMapKey()
    {
        return [
            'baidu_map_key' => ConfigServer::get('map','baidu_map_key',''),
        ];
    }
}