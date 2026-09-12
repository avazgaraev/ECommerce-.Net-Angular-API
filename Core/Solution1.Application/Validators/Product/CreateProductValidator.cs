using FluentValidation;
using Solution1.Application.ViewModels.Products;
using Solution1.Domain.Entities.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Solution1.Application.Validators.Product
{
    public class CreateProductValidator : AbstractValidator<VM_Product_Create>
    {
        public CreateProductValidator()
        {
            RuleFor(x => x.Name)
                .NotEmpty()
                .NotNull()
                    .WithMessage("Name field cannot be empty!")
                .MinimumLength(2)
                .MaximumLength(150)
                    .WithMessage("Please write name between 2 and 150.");

            RuleFor(x => x.Stock)
                .NotEmpty()
                .NotNull()
                    .WithMessage("Stock field cannot be empty!")
                .Must(x => x >= 0)
                    .WithMessage("Stock can not be negative");

            RuleFor(x => x.Price)
                .NotEmpty()
                .NotNull()
                    .WithMessage("Price field cannot be empty!")
                .Must(x => x >= 0)
                    .WithMessage("Price can not be negative");
        }
    }
}
