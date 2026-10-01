using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication1
{
    public class UserInfo
    {
        public string Name { get; set; }
        public string Family { get; set; }

        public string Email { get; set; }
        public string Password
        {
            get;
            set;
        } = "sajadZare";
        [NotMapped]
        public string FullName => Name + Family;
    }
}
