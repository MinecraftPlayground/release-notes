# release-notes
Fetch and parse Minecraft release notes

[![Test Action](https://github.com/MinecraftPlayground/release-notes/actions/workflows/test_action.yml/badge.svg)](https://github.com/MinecraftPlayground/release-notes/actions/workflows/test_action.yml)

## Usage

```yaml
jobs:
  release-notes:
    runs-on: ubuntu-latest
    steps:
      - name: 'Fetch and parse release notes'
        id: 'release-notes'
        uses: MinecraftPlayground/release-notes@latest
        with:
          version: 1.21.2

      - name: 'Output release notes'
        run: |
          echo "Output: ${{ steps.release-notes.outputs.json }}"
```

### Inputs

| Input                | Required? | Default          | Description                                                                                          |
| :------------------- | --------- | :----------------| :--------------------------------------------------------------------------------------------------- |
| `version`            | No        | `latest-release` | Minecraft version to fetch and parse release notes for or one of `latest-release`/`latest-snapshot`. |

### Outputs

| Output | Description                             |
| :----- | :-------------------------------------- |
| `html` | Release notes formatted as HTML.        |
| `text` | Release notes formatted as normal text. |
| `json` | Release notes formatted as JSON.        |

## License
The scripts and documentation in this project are released under the [GPLv3 License](./LICENSE).
