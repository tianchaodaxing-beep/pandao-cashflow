# Cash flow budget planner

[简体中文](README.md) · English

Plan monthly receipts and payments, and review balances and shortfalls.

Runs locally in your browser. No account or paid API is required. Demo data is fictional.

[Open online](https://tianchaodaxing-beep.github.io/pandao-cashflow/?lang=en) · [Download](https://github.com/tianchaodaxing-beep/pandao-cashflow/releases/latest) · [All projects](https://github.com/tianchaodaxing-beep/pandao-open-tools)

## Getting started

Download and extract the ZIP, then open `index.html`. On Windows you can double-click `Start-tool.cmd`. Keep the entire extracted folder together. Click **English** in the header; click **中文** to return to Chinese. Language selection preserves current inputs. Use `?lang=en` for a direct English page.

1. Enter opening balance, minimum reserve and one currency.
2. Edit or import months, expected receipts and payments. Use YYYY-MM for months.
3. Calculate cash flow and export the monthly budget.

## Files and data

Spreadsheet import supports `.xlsx`, `.xls`, `.csv` and `.tsv`. Only the first worksheet is read. A spreadsheet is limited to 20,000 rows and 10 MB. Text-file support varies by tool.

Spreadsheet templates and export headers follow the selected language. Chinese and English template headers can both be imported. User-entered content and numeric results are retained as entered. Data is processed on your device and is not uploaded by the tool. External feedback links open GitHub. Export any data you need before closing: inputs are not saved automatically.

## Supported scope

The budget supports up to 36 months. Missing months use zero receipts and payments; duplicate months are combined. Check the input range. These are user-entered budgets, not actual receipts.

## Development and licensing

Run `npm test` with Node.js 20 or later. Using the page requires no Node.js installation or runtime dependency.

MIT licensed. Commercial use, modification and redistribution are allowed while retaining the license notice. SheetJS Community Edition 0.20.3 uses Apache-2.0; see `THIRD_PARTY_NOTICES.md` and `vendor/SheetJS-LICENSE`.

## Feedback

Use the [issue tracker](https://github.com/tianchaodaxing-beep/pandao-cashflow/issues) to describe your use case and expected result. Use fictional examples in public reports; do not post customer data or credentials.

## Contact

Project enquiries and collaboration: [tianchaodaxing@gmail.com](mailto:tianchaodaxing@gmail.com)
