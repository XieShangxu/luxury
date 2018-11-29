export const getUserLevel = (fragment = 0, win = 0) => {
  if (fragment >= 2000 && win >= 1000) {
    return '时尚魔头'
  } else if (fragment >= 1000 || win >= 500) {
    return '时尚先锋'
  } else if (fragment >= 500 || win >= 200) {
    return '时尚达人'
  } else if (fragment >= 300 || win >= 50) {
    return '时尚小生'
  } else {
    return '时尚小白'
  }
}
