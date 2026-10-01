using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Model
{
    public class PostModel
    {
        

            [Required]
            [MaxLength(140)]
            public string Status { get; set; }

            public DateTime Date { get; set; }

        
    }
}
