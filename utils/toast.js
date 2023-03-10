// * wx.showToast
export function wxLoading(duration=3000) {
  wx.showToast({
    icon: 'loading',
    duration,
    title: '加载中'
  })
}

export function wxError(msg, duration=3000) {
  wx.showToast({
    icon: 'error',
    duration,
    title: msg || '错误'
  })
}

export function wxSuccess(msg, duration=3000) {
  wx.showToast({
    icon: 'success',
    duration,
    title: msg || '成功'
  })
}

export function wxToast(msg, duration=3000) {
  wx.showToast({
    icon: 'none',
    duration,
    title: msg || ''
  })
}