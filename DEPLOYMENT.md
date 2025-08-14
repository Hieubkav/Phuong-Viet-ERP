# Hướng dẫn Deploy lên GitHub Pages

## Cấu hình GitHub Pages

### Bước 1: Bật GitHub Pages
1. Vào repository trên GitHub: https://github.com/Hieubkav/Phuong-Viet-ERP
2. Vào **Settings** > **Pages**
3. Trong phần **Source**, chọn **GitHub Actions**

### Bước 2: Cấu hình Workflow
Workflow đã được tạo tại `.github/workflows/deploy.yml` và sẽ tự động:
- Chạy khi có push vào branch `main`
- Build dự án bằng Bun
- Deploy lên GitHub Pages

### Bước 3: Kiểm tra Deployment
1. Push code lên branch `main`
2. Vào tab **Actions** để theo dõi quá trình build
3. Sau khi hoàn thành, trang web sẽ có sẵn tại: `https://hieubkav.github.io/Phuong-Viet-ERP/`

## Scripts có sẵn

```bash
# Development
bun run dev

# Build cho production
bun run build

# Build cho GitHub Pages (với base path)
bun run build:github

# Preview build
bun run preview
```

## Cấu hình quan trọng

### Base Path
- Dự án được cấu hình để hoạt động với base path `/Phuong-Viet-ERP/`
- Điều này đảm bảo các asset và routing hoạt động đúng trên GitHub Pages

### Environment Variables
- `VITE_BASE_PATH`: Đường dẫn gốc cho deployment
- `GEMINI_API_KEY`: API key cho Gemini (nếu cần)

## Troubleshooting

### Nếu trang không load đúng:
1. Kiểm tra base path trong `vite.config.ts`
2. Đảm bảo tên repository trong workflow khớp với tên thực tế
3. Kiểm tra GitHub Pages settings

### Nếu build fail:
1. Kiểm tra logs trong tab Actions
2. Đảm bảo tất cả dependencies được cài đặt đúng
3. Kiểm tra syntax errors trong code

### Cập nhật tên repository:
Nếu đổi tên repository, cần cập nhật:
1. `VITE_BASE_PATH` trong `.github/workflows/deploy.yml`
2. Script `build:github` trong `package.json`
3. Base path trong `vite.config.ts`
