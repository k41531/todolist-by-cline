# PWA対応TODOリストアプリケーション 仕様書・要件定義書

## 1. プロジェクト概要

本プロジェクトは、Next.js、Supabase、Vercelを利用したPWA（Progressive Web Application）対応のTODOリストアプリケーションの開発を目的としています。ユーザーはオンライン・オフライン環境でタスク管理を行うことができ、モバイルデバイスからのアクセスも最適化されています。

## 2. 技術スタック

- **フロントエンド**: Next.js (React)
- **バックエンド**: Supabase (PostgreSQL, Authentication, Realtime)
- **ホスティング**: Vercel
- **PWA実装**: next-pwa
- **スタイリング**: TailwindCSS
- **状態管理**: React Context API / SWR

## 3. 機能要件

### 3.1 ユーザー管理

- **ユーザー登録・ログイン**
  - メールアドレス/パスワードによる認証
  - Googleアカウントによるソーシャルログイン
  - パスワードリセット機能

- **ユーザープロフィール**
  - 基本情報の編集（名前、メールアドレス）
  - アバター画像のアップロード
  - アカウント削除

### 3.2 タスク管理

- **タスクの作成**
  - タイトル（必須）
  - 説明（任意）
  - 期限日時（任意）
  - 優先度（低/中/高）
  - カテゴリ/タグ付け

- **タスクの表示**
  - リスト表示（デフォルト）
  - カレンダー表示
  - 完了/未完了の切り替え表示

- **タスクの編集**
  - すべての項目の編集
  - 完了/未完了のステータス変更

- **タスクの並べ替え**
  - 作成日順
  - 期限日順
  - 優先度順
  - カテゴリ/タグ別

- **タスクの検索・フィルタリング**
  - タイトル/説明による検索
  - 期限、優先度、カテゴリによるフィルタリング

### 3.3 リスト管理

- **複数リストの作成**
  - 個人用、仕事用など目的別リスト
  - リストの色分け

- **リストの共有**
  - 特定ユーザーとの共有
  - 権限設定（閲覧のみ/編集可能）

### 3.4 通知機能

- **リマインダー**
  - 期限が近づいたタスクの通知
  - 通知のカスタマイズ（時間帯、頻度）

- **プッシュ通知**
  - ブラウザ通知
  - モバイル通知（PWA利用時）

### 3.5 同期・オフライン機能

- **オフラインでの操作**
  - インターネット接続なしでのタスク閲覧/作成/編集
  - 接続復旧時の自動同期

- **デバイス間の同期**
  - ログイン中の全デバイスでのリアルタイム更新

## 4. 非機能要件

### 4.1 パフォーマンス

- **初期読み込み速度**
  - First Contentful Paint: 1.5秒以内
  - Time to Interactive: 3秒以内

- **応答性能**
  - ユーザー操作に対する応答: 200ms以内

### 4.2 セキュリティ

- **データ保護**
  - すべての通信のHTTPS化
  - ユーザーデータの暗号化保存
  - SQLインジェクション対策

- **認証・認可**
  - JWTによる認証
  - 適切なアクセス制御

### 4.3 スケーラビリティ

- ユーザー数増加に対応したインフラ構成
- Supabaseのスケーリング設定

### 4.4 ユーザビリティ

- **レスポンシブデザイン**
  - モバイル、タブレット、デスクトップに最適化

- **アクセシビリティ**
  - WCAG 2.1 AAレベル準拠
  - スクリーンリーダー対応

### 4.5 PWA要件

- **インストール可能**
  - マニフェストファイルの実装
  - ホーム画面へのインストール

- **オフライン対応**
  - Service Workerによるキャッシュ
  - オフラインデータ管理

- **プッシュ通知**
  - Web Push APIの実装

## 5. データモデル

### 5.1 ユーザーテーブル (users)
- id: UUID (PK)
- email: string
- password: string (ハッシュ化)
- name: string
- avatar_url: string
- created_at: timestamp
- updated_at: timestamp

### 5.2 リストテーブル (lists)
- id: UUID (PK)
- user_id: UUID (FK)
- name: string
- color: string
- is_default: boolean
- created_at: timestamp
- updated_at: timestamp

### 5.3 タスクテーブル (tasks)
- id: UUID (PK)
- list_id: UUID (FK)
- title: string
- description: text
- due_date: timestamp
- priority: enum (low, medium, high)
- status: enum (pending, completed)
- created_at: timestamp
- updated_at: timestamp

### 5.4 タグテーブル (tags)
- id: UUID (PK)
- name: string
- color: string
- user_id: UUID (FK)

### 5.5 タスク・タグ関連テーブル (task_tags)
- task_id: UUID (FK)
- tag_id: UUID (FK)

### 5.6 共有テーブル (shares)
- id: UUID (PK)
- list_id: UUID (FK)
- user_id: UUID (FK)
- permission: enum (read, write)
- created_at: timestamp

## 6. 画面設計

### 6.1 認証画面
- ログイン
- 新規登録
- パスワードリセット

### 6.2 メイン画面
- サイドバー（リスト一覧）
- ヘッダー（検索、ユーザー情報）
- タスク一覧
- タスク詳細/編集モーダル

### 6.3 設定画面
- ユーザープロフィール編集
- 通知設定
- テーマ設定

## 7. API設計

### 7.1 認証API
- POST /api/auth/register
- POST /api/auth/login
- POST /api/auth/logout
- POST /api/auth/reset-password

### 7.2 ユーザーAPI
- GET /api/users/me
- PATCH /api/users/me
- DELETE /api/users/me

### 7.3 リストAPI
- GET /api/lists
- POST /api/lists
- GET /api/lists/:id
- PATCH /api/lists/:id
- DELETE /api/lists/:id

### 7.4 タスクAPI
- GET /api/lists/:listId/tasks
- POST /api/lists/:listId/tasks
- GET /api/tasks/:id
- PATCH /api/tasks/:id
- DELETE /api/tasks/:id

### 7.5 タグAPI
- GET /api/tags
- POST /api/tags
- PATCH /api/tags/:id
- DELETE /api/tags/:id

### 7.6 共有API
- POST /api/lists/:listId/share
- DELETE /api/lists/:listId/share/:userId

## 8. 開発・デプロイメントフロー

### 8.1 開発環境
- ローカル開発: `npm run dev`
- テスト: Jest, React Testing Library
- リント: ESLint

### 8.2 CI/CD
- GitHub連携
- Pull Requestごとのプレビューデプロイ
- メインブランチへのマージで自動デプロイ

### 8.3 デプロイメント
- Vercelへの自動デプロイ
- 環境変数の管理
- ドメイン設定

## 9. テスト計画

### 9.1 単体テスト
- コンポーネントテスト
- ユーティリティ関数テスト

### 9.2 統合テスト
- APIとのインテグレーションテスト
- ユーザーフローテスト

### 9.3 E2Eテスト
- Cypress/Playwright によるE2Eテスト
- 主要ユーザーシナリオのテスト