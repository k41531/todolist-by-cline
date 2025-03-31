# TODOリストからGitHub Issueを作成する手順

このドキュメントは、`documents` フォルダ内のTODOリスト（例: `TODO_Phase1_MVP.md`）からGitHub Issueを効率的に作成するための手順を記述します。

## 前提条件

*   GitHub CLI (`gh`) がインストールされ、GitHubアカウントで認証済みであること (`gh auth login`)。
*   Issueを作成したいGitHubリポジトリが存在すること。

## 手順

1.  **Issueテンプレートの作成 (任意だが推奨)**
    *   リポジトリのルートに `.github` ディレクトリを作成します。
    *   `.github/ISSUE_TEMPLATE.md` ファイルを作成し、Issueの標準フォーマットを定義します。これにより、手動でIssueを作成する際にも一貫性を保てます。
    *   例:
        ```markdown
        ---
        name: Phase 1 Task
        about: Create an issue from the Phase 1 TODO list
        title: '[Phase1][カテゴリ] 具体的なタスク内容'
        labels: Phase1, カテゴリ名
        assignees: ''

        ---

        **Original Task ID:** `[タスクID]`<br/><br/>
        **Description:**<br/>
        (ここにタスクの詳細を記述)<br/><br/>
        **Acceptance Criteria:**<br/>
        - [ ] (受け入れ基準1)<br/>
        - [ ] (受け入れ基準2)<br/><br/>
        **Notes:**<br/>
        (補足事項があれば記述)
        ```
    *   **注意:** 本文内の改行には `\n` ではなく `<br/>` を使用します。

2.  **ラベルの作成**
    *   Issueを分類するためのラベルをリポジトリに作成します。TODOリストのカテゴリに対応するラベル（例: `Phase1`, `Setup`, `Auth`, `Task`, `Deploy`）を作成すると便利です。
    *   `gh label create` コマンドを使用します。
        ```bash
        gh label create Phase1 --repo <owner>/<repo> --description "..." --color "..."
        gh label create Setup --repo <owner>/<repo> --description "..." --color "..."
        # 他のラベルも同様に作成
        ```

3.  **TODOリストからタスクを特定**
    *   対象のTODOリストファイル（例: `documents/TODO_Phase1_MVP.md`）を開き、Issue化したい未完了のタスク (`- [ ]`) を特定します。
    *   各タスクのID（例: `[Setup-2]`）、カテゴリ（例: `Setup`）、内容を把握します。

4.  **Issueの作成 (gh issue create)**
    *   特定したタスクごとに `gh issue create` コマンドを実行します。
    *   `--title`: Issueのタイトルを指定します（例: `"[Phase1][Setup] Set up Supabase project"`）。
    *   `--body`: Issueの本文を指定します。最初は最小限の情報（例: `"**Original Task ID:** \`[Setup-2]\`"`）で作成することも可能です。
    *   `--label`: 作成したラベルを指定します（例: `--label "Phase1" --label "Setup"`）。
    *   `--repo`: 対象のリポジトリを指定します（例: `--repo k41531/todolist-by-cline`）。
    *   例:
        ```bash
        gh issue create --repo k41531/todolist-by-cline \
          --title "[Phase1][Setup] Set up Supabase project (Database, Auth)" \
          --body "**Original Task ID:** \`[Setup-2]\`" \
          --label "Phase1" --label "Setup"
        ```

5.  **Issue本文の編集 (gh issue edit - 詳細記述)**
    *   `gh issue create` で最小限の本文で作成した場合、`gh issue edit` コマンドで本文を更新し、具体的なDescriptionやAcceptance Criteriaを追記します。
    *   `--body`: 更新後の完全な本文を指定します。**改行には `<br/>` を使用します。**
    *   例:
        ```bash
        gh issue edit <issue番号> --repo k41531/todolist-by-cline \
          --body "**Original Task ID:** \`[Setup-2]\`<br/><br/>**Description:**<br/>Supabaseプロジェクトを作成し...<br/><br/>**Acceptance Criteria:**<br/>- [ ] Supabaseプロジェクトが作成されている。<br/>- [ ] API URLとAnon Keyが取得できている。<br/>..."
        ```

これで、TODOリストに基づいたGitHub Issueが、適切なフォーマットとラベルで作成されます。