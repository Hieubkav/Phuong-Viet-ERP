# Debug GitHub Pages Deployment

## Kiểm tra nhanh

### 1. Kiểm tra workflow có chạy không
```bash
# Xem branch hiện tại
git branch

# Xem commit history
git log --oneline -5

# Xem remote repository
git remote -v
```

### 2. Nếu workflow không chạy
**Nguyên nhân có thể:**
- Chưa push code lên GitHub
- Đang ở sai branch (cần `main` hoặc `master`)
- Repository chưa có workflow file

**Giải pháp:**
```bash
# Đảm bảo đang ở đúng branch
git checkout main
# HOẶC
git checkout master

# Push code
git add .
git commit -m "Add deployment workflow"
git push origin main
```

### 3. Nếu workflow chạy nhưng fail
**Vào Actions tab và kiểm tra lỗi:**

**Lỗi thường gặp:**
1. **Bun install fail** → Kiểm tra `bun.lock` file
2. **Build fail** → Kiểm tra syntax errors
3. **Permission denied** → Kiểm tra GitHub Pages settings

### 4. Nếu build thành công nhưng trang không load
**Kiểm tra:**
1. GitHub Pages settings: Source = "GitHub Actions" ✅
2. URL đúng: `https://hieubkav.github.io/Phuong-Viet-ERP/`
3. Base path trong code đúng

### 5. Test local trước khi deploy
```bash
# Test build
bun run build

# Test với GitHub Pages base path
bun run preview:github
```

## Workflow Manual Trigger

Nếu cần chạy workflow thủ công:
1. Vào repository GitHub
2. Tab **Actions**
3. Click "Deploy to GitHub Pages"
4. Click **Run workflow**
5. Chọn branch và click **Run workflow**

## Logs quan trọng

### Build logs sẽ hiển thị:
```
✓ 60 modules transformed.
dist/index.html  1.98 kB │ gzip:  0.87 kB
dist/assets/01_logo_PV-C3p5Xfid.png     22.24 kB
dist/assets/index-BiyAXe1v.js260.27 kB │ gzip: 80.52 kB
✓ built in 1.87s
```

### Deploy logs sẽ hiển thị:
```
Deploy to GitHub Pages
✓ Deployment successful
URL: https://hieubkav.github.io/Phuong-Viet-ERP/
```

## Liên hệ nếu cần hỗ trợ
Nếu vẫn gặp vấn đề, cung cấp:
1. Screenshot của Actions tab
2. Error logs từ workflow
3. GitHub Pages settings screenshot
