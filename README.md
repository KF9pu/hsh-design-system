## Getting Started

First, run the development server:

```use - bash
npm i hah-design-system
```

```note
npm version patch   # 수정 버전 증가 (예: 1.0.0 → 1.0.1)
npm version minor   # 부버전 증가 (예: 1.0.0 → 1.1.0)
npm version major   # 주버전 증가 (예: 1.0.0 → 2.0.0)
```

```build 순서
- npx rollup -c
- 버전 패치
- 깃 푸시
- npm public [ npm publish --access public ]
```
