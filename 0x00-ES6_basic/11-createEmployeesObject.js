export default function createEmployeeObject(departmentName, employees) {
  return {
    [departmentName]: [...employees],
  };
}
