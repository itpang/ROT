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
namespace app\admin\logic;

use app\common\logic\LogicBase;
use app\common\server\ConfigServer;
use app\common\server\UrlServer;

/**
 * 用户设置逻辑层
 * Class UserLogic
 * @package app\admin\logic\setting
 */
class UserSettingLogic extends LogicBase
{
    /**
     * @notes 获取用户配置
     * @return array
     * @author Tab
     */
    public static function getConfig()
    {
        $config = [
            // 邀请下级 0-关闭 1-开启(默认)
            'is_open' => ConfigServer::get('invite', 'is_open', 1),
            // 邀请下级资格 1-全部用户(默认) 2-分销会员
            'qualifications' => ConfigServer::get('invite', 'qualifications', [1]),
            // 成为下级条件 1-邀请码(默认)
            'condition' => ConfigServer::get('invite', 'condition', 1),
            // 自定义邀请海报
            'poster' => ConfigServer::get('invite', 'poster', '/images/share/share_user_bg.png'),
        ];
        $config['poster'] = empty($config['poster']) ? UrlServer::getFileUrl('images/share/share_user_bg.png') : UrlServer::getFileUrl($config['poster']);
        return $config;
    }

    /**
     * @notes 用户设置
     * @param $params
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author Tab
     */
    public static function set($params)
    {
        try {
            if(!isset($params['poster']) || empty($params['poster'])) {
                throw new \Exception('请选择自定义海报');
            }
            if(!isset($params['qualifications'])) {
                throw new \Exception('请至少选择一种分销资格');
            }
            $allowFields = ['is_open', 'qualifications', 'condition', 'poster'];
            foreach ($allowFields as $field) {
                if(isset($params[$field])) {
                    $params[$field] = is_array($params[$field]) ? json_encode($params[$field], JSON_UNESCAPED_UNICODE) : $params[$field];
                    $params[$field] = $field == 'poster' ? UrlServer::setFileUrl($params[$field]) : $params[$field];
                    ConfigServer::set('invite', $field, $params[$field]);
                }
            }
            return true;
        } catch (\Exception $e) {
            self::$error = $e->getMessage();
            return false;
        }
    }
}