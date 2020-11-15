// UC 1 -- To check for the attendance of the employee
const IS_ABSENT = 0;
let employeeCheck = Math.floor((Math.random()*10) % 2);
if(employeeCheck == IS_ABSENT)
{
    console.log("Employee is Absent");
    return;
}
else
{
    console.log("Employee is Present");
}
// UC 2 -- Check for daily wage based on whether the employee is part time or full time
/**
 * * Constants for the type of employee allotted to 1 or 2
 * ! Starting point of the UC 2
 * * Other constant for number of hours for part time and full time services
 */
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
/// Constant indicating number of working days in a month
const NUM_OF_WORKING_DAYS = 20;
/// Constant indicating the number of the maximum hours in a month as the limit of month end
const MAX_HRS_IN_MONTH = 100;

/**
 * * Refactor to add function to the code for fetching the employee hour
 * @param {if 1  --> Part time , 2 --> Full time} employeeTypeCheck 
 */
function GetEmployeeHour(employeeTypeCheck)
{
    switch(employeeTypeCheck)
    {
    case IS_PART_TIME:
        return PART_TIME_HOURS;
    case IS_FULL_TIME:
        return FULL_TIME_HOURS;
    default:
        return 0;
    }
}
/// Counter for the employee working hours and working days
let totalEmployeeHour = 0;
let totalWorkingDays = 0;
/// Array to store the daily wage of the employee
let employeeDailyWage = new Array();
/// Map to store the daily wage of the employee
let employeeDailyWageMap = new Map();
/**
 * * Random number generates a real number between 0 and 1(exclusive)
 * * switch case for checking the employee type
 * Then allocating the defined data of employee hourto the employee hour variable
 * In end calculating the total daily wage
 */
/**
 * * Now since we are known with the limit of the number of days and not the range
 * * Hence while loop is a good choice to pick
 * UC5 -- Replacing the for loop with the while loop and then evaluating the employee wage
 */
while(totalWorkingDays < NUM_OF_WORKING_DAYS && totalEmployeeHour <= MAX_HRS_IN_MONTH)
{
    /// Incrementing the day
    totalWorkingDays++;
    /// Generating the type of employee using random function
    let employeeTypeCheck = Math.floor((Math.random()*10) % 3);
    /// Variable to store the employee working hours
    let employeeHours = GetEmployeeHour(employeeTypeCheck);
    /// Incrementing the employee Hour from the value returned from the get employee hour class
    totalEmployeeHour += employeeHours;
    /// UC6 -- Adding the daily wage to the array
    employeeDailyWage.push(calculateDailyWageOfEmployee(employeeHours));
    /// UC8 -- Adding the daily wage to the map
    employeeDailyWageMap.set(totalWorkingDays, calculateDailyWageOfEmployee(employeeHours));
}
/// Computing the employee wage
let employeeWage = calculateDailyWageOfEmployee(totalEmployeeHour);
/// Printing the result of the calculation of the employee wages
console.log("Total Working days = "+ totalWorkingDays + "  Total Employee working hours = " + totalEmployeeHour + "  Employee Wage :" + employeeWage);
/**
 * Method to calculate the daily wage or the total wage when passed with working hours
 * @param {Pass the working hours} employeeHours 
 */
function calculateDailyWageOfEmployee(employeeHours)
{
    return (employeeHours * WAGE_PER_HOUR);
}
/// Printing the daily wage array
console.log("Daily Wage of Employee --->\n" + employeeDailyWage);
/// Printing the daily wage map
console.log("Daily Wage of Employee as Map --->\n");
/// Entries convert the map element to the key value object
/// Iterating which can print the wage
var mapEntries = employeeDailyWageMap.entries();
for(var element of mapEntries) 
console.log(element);

/// UC 7 --> Using the array helper class to perform operations
let totalEmployeeWage = 0;
/// Defining the callback function for the helper functions
function sum(dailyWage)
{
    totalEmployeeWage += dailyWage;
}
function totalWageResult(totalWage, dailyWage)
{
    return totalWage + dailyWage;
}
/// UC-7a : Using the foreach and reduce array helper function
employeeDailyWage.forEach(sum, 0);
console.log("Employee daily wage using foreach = " + totalEmployeeWage);
console.log("Employee daily wage using reduce = " + employeeDailyWage.reduce(totalWageResult, 0));

/// UC-7b : To show the day with daily wage using the array map helper function
let dayCounter = 0;
/// Defining the callback function for the map array helper function
function MapDayWithDailyWage(dailyWage)
{
    /// Incrementing the day counter
    dayCounter++;
    /// Returning the string value to the map
    return dayCounter + "=" + dailyWage;
}
/// Using the array map helper function to add the mapped element of the day with daily wage
let dayWithDailyWageMap = employeeDailyWage.map(MapDayWithDailyWage);
/// Printing the array map data of day with daily wage
console.log("Day with Daily Wages Map ---> " + dayWithDailyWageMap);

/// UC 7c : To show the day when the employee earned the full time wage
function FullTimeWageOfEmployee(dailyWage)
{
    /// Check if the map array element contains the full time description
    return dailyWage.includes("160");
}
/// Using the filter helper function to pass each element of the day to daily wage map and get only the full time earned wage
let fullDayWageForEmployeeArray = dayWithDailyWageMap.filter(FullTimeWageOfEmployee);
/// Printing the result of the filter operation
console.log("Days when the employee earned the full time wage -->" + fullDayWageForEmployeeArray);

/// UC 7d : To check for the first occurrence of the full time wage earned
function FindFirstFullTimeOccurence(dailyWage)
{
    /// Check if the map array element contains the full time description
    return dailyWage.includes("160");
}
/// Printing the result of the find operation
console.log("First day when the employee earned the full time wage --> " + dayWithDailyWageMap.find(FindFirstFullTimeOccurence));

/// UC 7e : To check for every full time wage in map has full time wage or not
function IsAllFullTimeWage(dailyWageFromMap)
{
    /// Check if the map array element contains the full time description
    return dailyWageFromMap.includes("160");
}
/// Printing the result of the every operation
console.log("Checking whether all the full time contains full time wage --> " + fullDayWageForEmployeeArray.every(IsAllFullTimeWage));

/// UC 7f : Check whether there is any part time wages
function FindWhetherThereIsPartTime(dailyWage)
{
    /// Check if the map array element contains the full time description
    return dailyWage.includes("80");
}
/// Printing the result of the some array helper operation
console.log("Check if any part time wage or not -->" + dayWithDailyWageMap.some(FindWhetherThereIsPartTime));

/// UC 7f : Find the number of hte days the employee has worked for each
/// Logic --> if the employee daily wage = 0 i.e. the employee was absent on that day then return the current value only
function TotalWorkingDays(numberOfDays, dailyWage)
{
    if(dailyWage > 0)
    return numberOfDays+1;
    return numberOfDays;
}
/// Printing the result of the reduce array helper operation
console.log("Number of Days the employee worked for -->" + employeeDailyWage.reduce(TotalWorkingDays, 0));

/// UC8 -- Printing the total wage using the map of employee wage and working days
/// Basically converting the values part of the map to the array object using from and then using the reduce array helper function
console.log("Total Wage of Employee using map of employee -->" + Array.from(employeeDailyWageMap.values()).reduce(totalWageResult, 0));