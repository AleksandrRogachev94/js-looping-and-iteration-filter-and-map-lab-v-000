// Code your solution here:

function driversWithRevenueOver(arr, revenue){
  return arr.filter(function(driver){
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(arr, revenue){
  return driversWithRevenueOver(arr, revenue).map(function(driver){
    return driver.name;
  });
}

function exactMatch(arr, attr){
  return arr.filter(function(driver){
    return driver.attr === attr;
  })
}
