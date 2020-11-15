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
console.log("Daily Wage of Employee --->\n" + employeeDailyWage)