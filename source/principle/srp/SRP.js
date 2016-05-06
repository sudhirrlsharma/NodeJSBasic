var employee = module.export =
 {
    createEmployee: function(firstname, lastName){
      this.firstname=firstname;
      this.lastName=lastName;

      this.getFullName: function{
        return firstname + " " + lastName;
      }
  }
}
