/*
 * FeaturePage Messages
 *
 * This contains all the text for the FeaturePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  AppHelmetTitle: {
    id: 'Public AppHelmetTitle',
    defaultMessage: '佳能大户专属投票工具(离线版)',
  },
  HeaderMenuCreateAccount: {
    id: 'Public HeaderMenuCreateAccount',
    defaultMessage: '账号创建',
  },
  HeaderMenuDelegate: {
    id: 'Public HeaderMenuDelegate',
    defaultMessage: '质押/解质押',
  },
  HeaderMenuTransfer: {
    id: 'Public HeaderMenuTransfer',
    defaultMessage: '转账',
  },
  HeaderMenuBuyRamBytes: {
    id: 'Public HeaderMenuBuyRamBytes',
    defaultMessage: '内存买卖',
  },
  HeaderMenuVote: {
    id: 'Public HeaderMenuVote',
    defaultMessage: '投票',
  },
  HeaderMenuProxy: {
    id: 'Public HeaderMenuProxy',
    defaultMessage: '代理投票',
  },
  HeaderMenuUpdateAuth: {
    id: 'Public HeaderMenuUpdateAuth',
    defaultMessage: '私钥管理',
  },
  HeaderMenuRefund: {
    id: 'Public HeaderMenuRefund',
    defaultMessage: '手动Refund',
  },
  TransactionSuccessNotificationMsg: {
    id: 'Public TransactionSuccessNotificationMsg',
    defaultMessage: '生成签名报文成功',
  },
  TransactionSuccessNotificationDescription: {
    id: 'Public TransactionSuccessNotificationDescription',
    defaultMessage: '请点击下面的复制签名报文按钮或者扫描二维码获取签名报文',
  },
  TransactionFailNotificationMsg: {
    id: 'Public TransactionFailNotificationMsg',
    defaultMessage: '生成签名报文失败',
  },
  TransactionFailNotificationDescription: {
    id: 'Public TransactionFailNotificationDescription',
    defaultMessage: '请重新获取签名报文',
  },
  CopyTransactionSuccessNotificationMsg: {
    id: 'Public CopyTransactionSuccessNotificationMsg',
    defaultMessage: '已复制',
  },
  CopyTransactionSuccessNotificationDescription: {
    id: 'Public CopyTransactionSuccessNotificationDescription',
    defaultMessage: `已将签名报文复制到剪贴板，请前往https://tool.eoscannon.io/联网将报文播报发送`,
  },
  JsonAlertMessage: {
    id: 'Public JsonAlertMessage',
    defaultMessage: '请输入联网获取的json字段',
  },
  JsonAlertDescription: {
    id: 'Public JsonAlertDescription',
    defaultMessage: `请前往https://tool.eoscannon.io/获取json字段，联网打开网页，扫描二维码即可获得。`,
  },
  FieldAlertMessage: {
    id: 'Public FieldAlertMessage',
    defaultMessage: '请输入为生成签名报文所需的字段',
  },
  FieldAlertDescription: {
    id: 'Public FieldAlertDescription',
    defaultMessage: '该页面为离线页面，输入的字段不会向外界泄露，请放心输入。',
  },
  CopyAlertMessage: {
    id: 'Public CopyAlertMessage',
    defaultMessage: '复制签名报文/扫描二维码',
  },
  CopyAlertDescription: {
    id: 'Public CopyAlertDescription',
    defaultMessage: `请将下面的签名报文复制后，前往https://tool.eoscannon.io/联网后进行播报发送。`,
  },
  KeyProviderFormItemLabel: {
    id: 'Public KeyProviderFormItemLabel',
    defaultMessage: '私钥',
  },
  KeyProviderFormItemPlaceholder: {
    id: 'Public KeyProviderFormItemPlaceholder',
    defaultMessage: '请输入私钥',
  },
  GetTransactionFormItemButtonName: {
    id: 'Public GetTransactionFormItemButtonName',
    defaultMessage: '生成签名报文',
  },
  OpenCameraButtonName: {
    id: 'Public OpenCameraButtonName',
    defaultMessage: '打开摄像头',
  },
  ScanQrcodeButtonName: {
    id: 'Public ScanQrcodeButtonName',
    defaultMessage: '扫描二维码',
  },
  JsonInfoPlaceholder: {
    id: 'Public JsonInfoPlaceholder',
    defaultMessage: '请输入联网获取的json字段',
  },
  TransactionTextAreaPlaceholder: {
    id: 'Public TransactionTextAreaPlaceholder',
    defaultMessage: '请复制生成的签名报文',
  },
  CopyTransactionButtonName: {
    id: 'Public CopyTransactionButtonName',
    defaultMessage: '复制签名报文',
  },
  QrCodeInitValue: {
    id: 'Public QrCodeInitValue',
    defaultMessage: '欢迎使用EOS佳能离线工具',
  },
  FooterCompText: {
    id: 'Public FooterCompText',
    defaultMessage: 'EOS佳能荣誉出品 ©2018',
  },
});
