const range = document.getElementById("range");
const viewCount = document.getElementById("pageviews");
const toggleDiscount = document.getElementById("toggle-discount");
const price = document.getElementById("price");
const rangesize = document.getElementById("rangesize");

let isDiscountApplied = false;

function priceChange(value) {
  if (!isDiscountApplied) {
    if (value == 1) {
      viewCount.textContent = "10K pageviews";
      price.textContent = "$8.00";
      rangesize.style.width = "0";
    } else if (value == 2) {
      viewCount.textContent = "50K pageviews";
      price.textContent = "$12.00";
      rangesize.style.width = "25%";
    } else if (value == 3) {
      viewCount.textContent = "100K pageviews";
      price.textContent = "$16.00";
      rangesize.style.width = "50%";
    } else if (value == 4) {
      viewCount.textContent = "500K pageviews";
      price.textContent = "$24.00";
      rangesize.style.width = "75%";
    } else if (value == 5) {
      viewCount.textContent = "1M pageviews";
      price.textContent = "$36.00";
      rangesize.style.width = "100%";
    }
  } else {
    if (value == 1) {
      viewCount.textContent = "10K pageviews";
      price.textContent = "$6.00";
      rangesize.style.width = "0";
    } else if (value == 2) {
      viewCount.textContent = "50K pageviews";
      price.textContent = "$9.00";
      rangesize.style.width = "25%";
    } else if (value == 3) {
      viewCount.textContent = "100K pageviews";
      price.textContent = "$12.00";
      rangesize.style.width = "50%";
    } else if (value == 4) {
      viewCount.textContent = "500K pageviews";
      price.textContent = "$18.00";
      rangesize.style.width = "75%";
    } else if (value == 5) {
      viewCount.textContent = "1M pageviews";
      price.textContent = "$27.00";
      rangesize.style.width = "100%";
    }
  }
}

range.addEventListener("input", () => {
  priceChange(range.value);
});

toggleDiscount.addEventListener("change", function () {
  if (toggleDiscount.checked) {
    isDiscountApplied = true;
    priceChange(range.value);
  } else {
    isDiscountApplied = false;
    priceChange(range.value);
  }
});
