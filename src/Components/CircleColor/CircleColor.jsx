import React from "react";
import "./circlecolor.css";
import CircleColorImg from "../../Asset/Images/CircleColor.png";

export default function CircleColor() {
  return (
    <div className="circlecolor__container">
      <div className="circlecolor__title-box">
        <div className="circlecolor__title" id="circlecolor-title-1">
          <h2>چرخه رنگ</h2>
          <h5>
            چرخه رنگ‌ها بر اساس رنگ‌های رنگین کمان تنظیم شده است: قرمز، نارنجی،
            زرد، سبز، آبی و بنفش. با قرار دادن این طیف‌ها در حول یک دایره ترکیب
            جدید، ولی در چرخه رنگ‌ها یافت می‌شود. با استفاده از این چرخه رنگ
            فهمیدن ارتباط بین رنگ‌های مختلف آسان‌تر خواهد شد.
          </h5>
        </div>
      </div>

      <div className="circlecolor__image">
        <img src={CircleColorImg} alt="Circle Color" />
      </div>

      <div className="circlecolor__title-box">
        <div className="circlecolor__title" id="circlecolor-title-2">
          <h3>رنگ‌های اصلی</h3>
          <h5>
            رنگ‌های اصلی قرمز، زرد و آبی رنگ‌های خالص بوده و از ترکیب هیچ رنگ
            دیگری به دست نمی‌آیند. اگر سه رنگ با هم مخلوط شوند نتیجه کار رنگ
            خاکستری تیره فام‌دار یا به قولی دیگر سیاه یا قهوه‌ای است.
          </h5>
        </div>

        <div className="circlecolor__title" id="circlecolor-title-3">
          <h3>رنگ‌های ثانویه</h3>
          <h5>
            از ترکیب مساوی دو رنگ اصلی رنگ‌های ثانویه به دست می‌آید. نارنجی، سبز
            و بنفش رنگ‌های ثانویه هستند.
          </h5>
        </div>

        <div className="circlecolor__title" id="circlecolor-title-4">
          <h3>رنگ‌های مرتبه سوم</h3>
          <h5>
            رنگهای قرمز - نارنجی، قرمز - بنفش، زرد - سبز، زرد - نارنجی، آبی - بنفش و
            آبی - سبز از رنگ‌های اصلی و ثانویه با هم ترکیب شده و رنگ‌های مرتبه سوم
            را تشکیل می‌دهند.
          </h5>
        </div>
      </div>
    </div>
  );
}
