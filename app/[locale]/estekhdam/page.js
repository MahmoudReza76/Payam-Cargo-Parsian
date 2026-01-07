"use client";
import React, {useState} from "react";
import {
  Check,
  Info,
  User,
  Phone,
  MapPin,
  Briefcase,
  Calendar
} from "lucide-react";

function EmploymentForm() {
  const [currentForm, setCurrentForm] = useState(1);

  const nextForm = () => {
    if (currentForm < 3) setCurrentForm(currentForm + 1);
  };

  const prevForm = () => {
    if (currentForm > 1) setCurrentForm(currentForm - 1);
  };

  return (
    <div className="min-h-screen bg-input/30 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Form Header */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-600 p-6 text-white">
          <h1 className="text-2xl font-bold text-center">
            فرم درخواست استخدام
          </h1>
          <div className="flex justify-center mt-4">
            <div className="flex items-center">
              {[1, 2, 3].map((step) => (
                <React.Fragment key={step}>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      currentForm >= step
                        ? "bg-white text-blue-900"
                        : "bg-blue-800 text-white"
                    }`}
                  >
                    {step}
                  </div>
                  {step < 3 && (
                    <div
                      className={`w-10 h-1 ${
                        currentForm > step ? "bg-white" : "bg-blue-800"
                      }`}
                    ></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6 md:p-8 rtl text-right" dir="rtl">
          {currentForm === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-blue-900 border-r-4 border-blue-600 pr-2">
                فرم شماره ۱
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      به چه هنری علاقمندید:
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">
                      پسندترین تفریح شما چیست:
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      آخرین کتابی که خواندید:
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">
                      اهل مطالعه هستید:
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  اگر به مهمانی دعوت شوید و از طرف سازمان به شما وظیفه ای محول
                  شود چه میکنید؟
                </label>
                <textarea className="w-full border border-gray-300 rounded-lg p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700">
                      آیا مشغول به کار هستید؟
                    </span>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input type="radio" name="working" className="ml-2" />
                        بلی
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="working" className="ml-2" />
                        خیر
                      </label>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700">
                      در صورت لزوم آیا می توانید جهت حسن انجام کار تضمین بدهید؟
                    </span>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input type="radio" name="guarantee" className="ml-2" />
                        بلی
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="guarantee" className="ml-2" />
                        خیر
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  پیشنهاد (مبلغ پیشنهادی...... ریال)
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-blue-50">
                      <th className="border border-gray-300 p-2 text-blue-900">
                        نام و نام خانوادگی
                      </th>
                      <th className="border border-gray-300 p-2 text-blue-900">
                        جنسیت
                      </th>
                      <th className="border border-gray-300 p-2 text-blue-900">
                        نسبت با کارمند
                      </th>
                      <th className="border border-gray-300 p-2 text-blue-900">
                        تاریخ تولد روز / ماه / سال
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3, 4].map((row) => (
                      <tr key={row}>
                        <td className="border border-gray-300 p-2">
                          <input
                            type="text"
                            className="w-full border-none focus:outline-none"
                          />
                        </td>
                        <td className="border border-gray-300 p-2">
                          <input
                            type="text"
                            className="w-full border-none focus:outline-none"
                          />
                        </td>
                        <td className="border border-gray-300 p-2">
                          <input
                            type="text"
                            className="w-full border-none focus:outline-none"
                          />
                        </td>
                        <td className="border border-gray-300 p-2">
                          <input
                            type="text"
                            className="w-full border-none focus:outline-none"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  آدرس محل سکونت:
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

                <div className="flex flex-wrap gap-4 mt-2">
                  <label className="flex items-center">
                    <input type="radio" name="homeType" className="ml-2" />
                    منزل شخصی
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="homeType" className="ml-2" />
                    منزل اجاره ای
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="homeType" className="ml-2" />
                    سایر
                  </label>
                  <div className="flex items-center">
                    <span className="ml-2">توضیح:</span>
                    <input
                      type="text"
                      className="border-b border-gray-300 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">
                    تلفن همراه:
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    تلفن اضطراری:
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">
                    فردی که می بایست در صورت اتفاقات ناگهانی مطلع شود:
                  </label>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    نام و نام خانوادگی:
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">نشانی:</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold">
                  بدینوسیله صحت کلیه اطلاعات مندرج در این فرم را تأیید و گواهی
                  می نمایم.
                </p>
                <div className="mt-2">
                  <label className="block text-gray-700 mb-2">
                    نام و نام خانوادگی:
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="bg-yellow-50 border-r-4 border-yellow-400 p-3 rounded">
                <p className="text-yellow-800">
                  <strong>توجه:</strong> تکمیل نمودن این فرم هیچگونه تعهدی در
                  قبال استخدام شما برای شرکت ایجاد نمی نماید.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-4 mt-6">
                <h3 className="text-lg font-bold text-blue-900 mb-4">
                  قسمت زیر توسط شرکت تکمیل می گردد.
                </h3>

                <div>
                  <label className="block text-gray-700 mb-2">
                    نتیجه ارزیابی مصاحبه:
                  </label>
                  <textarea className="w-full border border-gray-300 rounded-lg p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
                </div>

                <div className="mt-4">
                  <label className="block text-gray-700 mb-2">
                    مصاحبه کننده:
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      نام و نظر ارزیاب اول:
                    </label>
                    <textarea className="w-full border border-gray-300 rounded-lg p-2 h-20 focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
                    <div className="mt-2 text-center">
                      <label className="block text-gray-700 mb-1">امضا:</label>
                      <div className="h-16 border border-gray-300 rounded-lg"></div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">
                      نام و نظر ارزیاب دوم:
                    </label>
                    <textarea className="w-full border border-gray-300 rounded-lg p-2 h-20 focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
                    <div className="mt-2 text-center">
                      <label className="block text-gray-700 mb-1">امضا:</label>
                      <div className="h-16 border border-gray-300 rounded-lg"></div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">
                      نام و نظر ارزیاب سوم:
                    </label>
                    <textarea className="w-full border border-gray-300 rounded-lg p-2 h-20 focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
                    <div className="mt-2 text-center">
                      <label className="block text-gray-700 mb-1">امضا:</label>
                      <div className="h-16 border border-gray-300 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentForm === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-blue-900 border-r-4 border-blue-600 pr-2">
                فرم شماره ۲
              </h2>

              <div>
                <h3 className="text-lg font-bold text-blue-800 mb-3">
                  دوره های آموزشی:
                </h3>
                <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-blue-50">
                      <th className="border border-gray-300 p-2 text-blue-900">
                        ردیف
                      </th>
                      <th className="border border-gray-300 p-2 text-blue-900">
                        نام دوره آموزشی
                      </th>
                      <th className="border border-gray-300 p-2 text-blue-900">
                        نام موسسه آموزش
                      </th>
                      <th className="border border-gray-300 p-2 text-blue-900">
                        مدت دوره
                      </th>
                      <th className="border border-gray-300 p-2 text-blue-900">
                        تاریخ پایان
                      </th>
                      <th className="border border-gray-300 p-2 text-blue-900">
                        توضیحات
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2 text-center">
                        دوره های فنی و حرفه ای
                      </td>
                      <td className="border border-gray-300 p-2">1</td>
                      <td className="border border-gray-300 p-2">
                        <input
                          type="text"
                          className="w-full border-none focus:outline-none"
                        />
                      </td>
                      <td className="border border-gray-300 p-2">
                        <input
                          type="text"
                          className="w-full border-none focus:outline-none"
                        />
                      </td>
                      <td className="border border-gray-300 p-2">
                        <input
                          type="text"
                          className="w-full border-none focus:outline-none"
                        />
                      </td>
                      <td className="border border-gray-300 p-2">
                        <input
                          type="text"
                          className="w-full border-none focus:outline-none"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2"></td>
                      <td className="border border-gray-300 p-2">2</td>
                      <td className="border border-gray-300 p-2">
                        <input
                          type="text"
                          className="w-full border-none focus:outline-none"
                        />
                      </td>
                      <td className="border border-gray-300 p-2">
                        <input
                          type="text"
                          className="w-full border-none focus:outline-none"
                        />
                      </td>
                      <td className="border border-gray-300 p-2">
                        <input
                          type="text"
                          className="w-full border-none focus:outline-none"
                        />
                      </td>
                      <td className="border border-gray-300 p-2">
                        <input
                          type="text"
                          className="w-full border-none focus:outline-none"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-2 text-gray-700">
                  گواهینامه دوره های فنی و حرفه ای با موسسات آموزشی
                </p>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700">
                    آیا سابقه کیفری یا بازداشت دارید؟
                  </span>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input type="radio" name="criminal" className="ml-2" />
                      بلی
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="criminal" className="ml-2" />
                      خیر
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    اگر بله، نوع سابقه را بفرمائید.
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-lg font-bold text-blue-800 mb-3">
                  مهارتها و توانایی ها:
                </h3>
                <textarea className="w-full border border-gray-300 rounded-lg p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
              </div>

              <div>
                <h3 className="text-lg font-bold text-blue-800 mb-3">
                  علایق (در حوزه مسائل شغلی):
                </h3>
                <textarea className="w-full border border-gray-300 rounded-lg p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-bold text-blue-800 mb-3">
                  در موارد زیر از 100 تا 0 به خود نمره دهید:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      نظم در انجام شرح وظایف:
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">
                      صبر و شکیبایی:
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">
                      دقت و ظرافت:
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">
                    تلاش و پشتکار:
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    توانایی برنامه ریزی برای انجام امور محوله:
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    کارگروهی و تیمی:
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-lg font-bold text-blue-800 mb-3">
                  فعالیت های علمی:
                </h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      ارائه سمینار:
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">
                      تدوین کتاب یا مقاله علمی:
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">
                      سایر فعالیت های علمی:
                    </label>
                    <textarea className="w-full border border-gray-300 rounded-lg p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-lg font-bold text-blue-800 mb-3">
                  نحوه همکاری:
                </h3>
                <p className="text-gray-700 mb-2">تمایل به همکاری به صورت:</p>
                <div className="flex flex-wrap gap-6 mb-4">
                  <label className="flex items-center">
                    <input type="radio" name="workType" className="ml-2" />
                    تمام وقت
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="workType" className="ml-2" />
                    پاره وقت
                  </label>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    در صورت تمایل به کار پاره وقت، ساعات و روزهای همکاری را
                    دقیقاً اعلام فرمائید.
                  </label>
                  <textarea className="w-full border border-gray-300 rounded-lg p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-700">
                  آیا سیگار یا هر گونه دخانیات مصرف می کنید؟
                </span>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input type="radio" name="smoking" className="ml-2" />
                    بلی
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="smoking" className="ml-2" />
                    خیر
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  اگر بله، کدام نوع:
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">
                    شغل مورد درخواست:
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    تاریخی که می توانید مشغول به کار شوید:
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  آیا دارای سابقه پرداخت حق بیمه هستید؟ در صورت مثبت بودن، چند
                  سال سابقه دارید و شماره بیمه شما چیست؟
                </label>
                <textarea className="w-full border border-gray-300 rounded-lg p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-lg font-bold text-blue-800 mb-3">
                  چگونگی آشنایی شما با شرکت:
                </h3>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <h3 className="text-lg font-bold text-blue-800 mb-3">
                  دو نفر از کسانی که شما را به خوبی می شناسند و هیچگونه نسبت
                  فامیلی با شما ندارند را ذکر فرمائید:
                </h3>

                <div className="space-y-4 mb-4">
                  <h4 className="font-semibold text-gray-700">فرد اول:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2">
                        نام و نام خانوادگی:
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">نسبت:</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">شغل:</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">
                        نشانی و محل کار:
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-700">فرد دوم:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2">
                        نام و نام خانوادگی:
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">نسبت:</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">شغل:</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">
                        نشانی و محل کار:
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-700">
                  در صورت انتقال یا مأموریت، حاضر به رفتن به شهرستانها و شعبات
                  دیگر هستید؟
                </span>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input type="radio" name="transfer" className="ml-2" />
                    بلی
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="transfer" className="ml-2" />
                    خیر
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  مسیر شغلی خود در 10 سال آینده را به چه صورت می بینید؟ جایگاه
                  شغلی شما در 10 سال آینده چه می باشد؟
                </label>
                <textarea className="w-full border border-gray-300 rounded-lg p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
              </div>
            </div>
          )}

          {currentForm === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-blue-900 border-r-4 border-blue-600 pr-2">
                فرم شماره ۳
              </h2>
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-blue-800">
                  فرم پرسشنامه استخدام
                </h3>
                <p className="text-gray-600">
                  (لطفاً تمامی فیلدها با دقت تکمیل گردد)
                </p>
              </div>

              <div className="flex justify-end">
                <div className="w-full max-w-xs">
                  <label className="block text-gray-700 mb-2">
                    تاریخ تکمیل:
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">
                    نام و نام خانوادگی:
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">نام پدر:</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">محل تولد:</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    تاریخ تولد:
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    شماره شناسنامه:
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    محل صدور شناسنامه:
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">کد ملی:</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">ملیت:</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-gray-700">وضعیت تاهل:</span>
                  <label className="flex items-center">
                    <input type="radio" name="maritalStatus" className="ml-2" />
                    مجرد
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="maritalStatus" className="ml-2" />
                    متاهل
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      تعداد پسر:
                    </label>
                    <input
                      type="number"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      تعداد دختر:
                    </label>
                    <input
                      type="number"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-gray-700">
                    سلامت وضعیت روحی و جسمانی:
                  </span>
                  <label className="flex items-center">
                    <input type="radio" name="health" className="ml-2" />
                    بلی
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="health" className="ml-2" />
                    خیر
                  </label>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    درصورت خیر توضیح دهید:
                  </label>
                  <textarea className="w-full border border-gray-300 rounded-lg p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-gray-700">خدمت نظام وظیفه:</span>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="militaryService"
                      className="ml-2"
                    />
                    انجام داده
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="militaryService"
                      className="ml-2"
                    />
                    مشمول
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="militaryService"
                      className="ml-2"
                    />
                    معاف از خدمت
                  </label>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    ذکر نوع و علت معافیت:
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-blue-800 mb-3">
                  سوابق تحصیلی و آموزشی:
                </h3>
                <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-blue-50">
                      <th className="border border-gray-300 p-2 text-blue-900">
                        مدرک تحصیلی (به ترتیب آخرین مدرک)
                      </th>
                      <th className="border border-gray-300 p-2 text-blue-900">
                        رشته تحصیلی
                      </th>
                      <th className="border border-gray-300 p-2 text-blue-900">
                        معدل کل
                      </th>
                      <th className="border border-gray-300 p-2 text-blue-900">
                        تاریخ شروع
                      </th>
                      <th className="border border-gray-300 p-2 text-blue-900">
                        تاریخ پایان
                      </th>
                      <th className="border border-gray-300 p-2 text-blue-900">
                        نام مؤسسه آموزشی
                      </th>
                      <th className="border border-gray-300 p-2 text-blue-900">
                        شهر - کشور
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3].map((row) => (
                      <tr key={row}>
                        <td className="border border-gray-300 p-2">
                          <input
                            type="text"
                            className="w-full border-none focus:outline-none"
                          />
                        </td>
                        <td className="border border-gray-300 p-2">
                          <input
                            type="text"
                            className="w-full border-none focus:outline-none"
                          />
                        </td>
                        <td className="border border-gray-300 p-2">
                          <input
                            type="text"
                            className="w-full border-none focus:outline-none"
                          />
                        </td>
                        <td className="border border-gray-300 p-2">
                          <input
                            type="text"
                            className="w-full border-none focus:outline-none"
                          />
                        </td>
                        <td className="border border-gray-300 p-2">
                          <input
                            type="text"
                            className="w-full border-none focus:outline-none"
                          />
                        </td>
                        <td className="border border-gray-300 p-2">
                          <input
                            type="text"
                            className="w-full border-none focus:outline-none"
                          />
                        </td>
                        <td className="border border-gray-300 p-2">
                          <input
                            type="text"
                            className="w-full border-none focus:outline-none"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div>
                <h3 className="text-lg font-bold text-blue-800 mb-3">
                  تجربیات شغلی:
                </h3>
                <p className="text-gray-700 mb-2">
                  جهت استعلام سوابق شغلی، ذکر شماره تماس شرکت های قبلی الزامی می
                  باشد و عدم ذکر آن به منزله انصراف درخواست استخدامی می باشد.
                </p>
                <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-blue-50">
                      <th className="border border-gray-300 p-2 text-blue-900">
                        نام سازمان یا شرکت (به ترتیب از آخرین سابقه)
                      </th>
                      <th className="border border-gray-300 p-2 text-blue-900">
                        سمت / شغل
                      </th>
                      <th className="border border-gray-300 p-2 text-blue-900">
                        شماره تماس
                      </th>
                      <th className="border border-gray-300 p-2 text-blue-900">
                        تاریخ شروع
                      </th>
                      <th className="border border-gray-300 p-2 text-blue-900">
                        تاریخ پایان
                      </th>
                      <th className="border border-gray-300 p-2 text-blue-900">
                        آخرین حقوق و مزایا/ریال
                      </th>
                      <th className="border border-gray-300 p-2 text-blue-900">
                        علت ترک خدمت
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3].map((row) => (
                      <tr key={row}>
                        <td className="border border-gray-300 p-2">
                          <input
                            type="text"
                            className="w-full border-none focus:outline-none"
                          />
                        </td>
                        <td className="border border-gray-300 p-2">
                          <input
                            type="text"
                            className="w-full border-none focus:outline-none"
                          />
                        </td>
                        <td className="border border-gray-300 p-2">
                          <input
                            type="text"
                            className="w-full border-none focus:outline-none"
                          />
                        </td>
                        <td className="border border-gray-300 p-2">
                          <input
                            type="text"
                            className="w-full border-none focus:outline-none"
                          />
                        </td>
                        <td className="border border-gray-300 p-2">
                          <input
                            type="text"
                            className="w-full border-none focus:outline-none"
                          />
                        </td>
                        <td className="border border-gray-300 p-2">
                          <input
                            type="text"
                            className="w-full border-none focus:outline-none"
                          />
                        </td>
                        <td className="border border-gray-300 p-2">
                          <input
                            type="text"
                            className="w-full border-none focus:outline-none"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div>
                <h3 className="text-lg font-bold text-blue-800 mb-3">
                  آشنایی به زبانهای خارجی، کامپیوتر و سایر دوره ها:
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-blue-50">
                        <th
                          colSpan="5"
                          className="border border-gray-300 p-2 text-blue-900"
                        >
                          زبان اول
                        </th>
                        <th
                          colSpan="5"
                          className="border border-gray-300 p-2 text-blue-900"
                        >
                          زبان دوم
                        </th>
                      </tr>
                      <tr className="bg-blue-50">
                        <th className="border border-gray-300 p-2 text-blue-900">
                          نام زبان / وضعیت
                        </th>
                        <th className="border border-gray-300 p-2 text-blue-900">
                          ضعیف
                        </th>
                        <th className="border border-gray-300 p-2 text-blue-900">
                          متوسط
                        </th>
                        <th className="border border-gray-300 p-2 text-blue-900">
                          خوب
                        </th>
                        <th className="border border-gray-300 p-2 text-blue-900">
                          عالی
                        </th>
                        <th className="border border-gray-300 p-2 text-blue-900">
                          نام زبان / وضعیت
                        </th>
                        <th className="border border-gray-300 p-2 text-blue-900">
                          ضعیف
                        </th>
                        <th className="border border-gray-300 p-2 text-blue-900">
                          متوسط
                        </th>
                        <th className="border border-gray-300 p-2 text-blue-900">
                          خوب
                        </th>
                        <th className="border border-gray-300 p-2 text-blue-900">
                          عالی
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2">خواندن</td>
                        <td className="border border-gray-300 p-2 text-center">
                          <input type="radio" name="lang1_read" />
                        </td>
                        <td className="border border-gray-300 p-2 text-center">
                          <input type="radio" name="lang1_read" />
                        </td>
                        <td className="border border-gray-300 p-2 text-center">
                          <input type="radio" name="lang1_read" />
                        </td>
                        <td className="border border-gray-300 p-2 text-center">
                          <input type="radio" name="lang1_read" />
                        </td>
                        <td className="border border-gray-300 p-2">
                          <input
                            type="text"
                            className="w-full border-none focus:outline-none"
                          />
                        </td>
                        <td className="border border-gray-300 p-2 text-center">
                          <input type="radio" name="lang2_read" />
                        </td>
                        <td className="border border-gray-300 p-2 text-center">
                          <input type="radio" name="lang2_read" />
                        </td>
                        <td className="border border-gray-300 p-2 text-center">
                          <input type="radio" name="lang2_read" />
                        </td>
                        <td className="border border-gray-300 p-2 text-center">
                          <input type="radio" name="lang2_read" />
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">نوشتن</td>
                        <td className="border border-gray-300 p-2 text-center">
                          <input type="radio" name="lang1_write" />
                        </td>
                        <td className="border border-gray-300 p-2 text-center">
                          <input type="radio" name="lang1_write" />
                        </td>
                        <td className="border border-gray-300 p-2 text-center">
                          <input type="radio" name="lang1_write" />
                        </td>
                        <td className="border border-gray-300 p-2 text-center">
                          <input type="radio" name="lang1_write" />
                        </td>
                        <td className="border border-gray-300 p-2"></td>
                        <td className="border border-gray-300 p-2 text-center">
                          <input type="radio" name="lang2_write" />
                        </td>
                        <td className="border border-gray-300 p-2 text-center">
                          <input type="radio" name="lang2_write" />
                        </td>
                        <td className="border border-gray-300 p-2 text-center">
                          <input type="radio" name="lang2_write" />
                        </td>
                        <td className="border border-gray-300 p-2 text-center">
                          <input type="radio" name="lang2_write" />
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">مکالمه</td>
                        <td className="border border-gray-300 p-2 text-center">
                          <input type="radio" name="lang1_speak" />
                        </td>
                        <td className="border border-gray-300 p-2 text-center">
                          <input type="radio" name="lang1_speak" />
                        </td>
                        <td className="border border-gray-300 p-2 text-center">
                          <input type="radio" name="lang1_speak" />
                        </td>
                        <td className="border border-gray-300 p-2 text-center">
                          <input type="radio" name="lang1_speak" />
                        </td>
                        <td className="border border-gray-300 p-2"></td>
                        <td className="border border-gray-300 p-2 text-center">
                          <input type="radio" name="lang2_speak" />
                        </td>
                        <td className="border border-gray-300 p-2 text-center">
                          <input type="radio" name="lang2_speak" />
                        </td>
                        <td className="border border-gray-300 p-2 text-center">
                          <input type="radio" name="lang2_speak" />
                        </td>
                        <td className="border border-gray-300 p-2 text-center">
                          <input type="radio" name="lang2_speak" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-blue-800 mb-3">
                  آشنایی با کامپیوتر:
                </h3>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="ml-2" />
                    Windows
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="ml-2" />
                    Word
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="ml-2" />
                    Excel
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="ml-2" />
                    Access
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="ml-2" />
                    Internet
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="ml-2" />
                    Power Point
                  </label>
                </div>
                <div className="mt-2">
                  <label className="block text-gray-700 mb-2">سایر:</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Form Footer */}
        <div className="bg-gray-50 px-6 py-4 flex justify-between items-center border-t border-gray-200">
          <button
            onClick={prevForm}
            className={`px-6 py-2 rounded-lg flex items-center gap-2 ${
              currentForm === 1
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
            disabled={currentForm === 1}
          >
            <span>قبلی</span>
          </button>

          <div className="text-gray-600">صفحه {currentForm} از 3</div>

          {currentForm < 3 ? (
            <button
              onClick={nextForm}
              className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 flex items-center gap-2"
            >
              <span>بعدی</span>
            </button>
          ) : (
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2">
              <span>ثبت نهایی</span>
              <Check className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default EmploymentForm;
