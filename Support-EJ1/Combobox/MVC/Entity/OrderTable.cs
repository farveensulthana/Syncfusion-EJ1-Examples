//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Entity
{
    using System;
    using System.Collections.Generic;
    
    public partial class OrderTable
    {
        public int OrderID { get; set; }
        public int EmployeeID { get; set; }
        public string CustomerID { get; set; }
        public double Freight { get; set; }
    }
}