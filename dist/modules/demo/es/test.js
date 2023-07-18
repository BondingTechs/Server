"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestEsIndex = void 0;
const es_1 = require("@cool-midway/es");
/**
 * 测试索引
 */
let TestEsIndex = class TestEsIndex extends es_1.BaseEsIndex {
    indexInfo() {
        return {
            // 需要安装ik分词器 https://github.com/medcl/elasticsearch-analysis-ik
            name: {
                type: 'text',
                analyzer: 'ik_max_word',
                search_analyzer: 'ik_max_word',
                fields: {
                    raw: {
                        type: 'keyword',
                    },
                },
            },
            age: {
                type: 'long',
            },
        };
    }
};
TestEsIndex = __decorate([
    (0, es_1.CoolEsIndex)({ name: 'test', replicas: 0 })
], TestEsIndex);
exports.TestEsIndex = TestEsIndex;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Vyb3UvcHJvamVjdC9ib25kaW5nLW9sZDIvc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGVtby9lcy90ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHdDQUFvRTtBQUVwRTs7R0FFRztBQUVILElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVksU0FBUSxnQkFBVztJQUMxQyxTQUFTO1FBQ1AsT0FBTztZQUNMLCtEQUErRDtZQUMvRCxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLGVBQWUsRUFBRSxhQUFhO2dCQUM5QixNQUFNLEVBQUU7b0JBQ04sR0FBRyxFQUFFO3dCQUNILElBQUksRUFBRSxTQUFTO3FCQUNoQjtpQkFDRjthQUNGO1lBQ0QsR0FBRyxFQUFFO2dCQUNILElBQUksRUFBRSxNQUFNO2FBQ2I7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUFuQlksV0FBVztJQUR2QixJQUFBLGdCQUFXLEVBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQztHQUM5QixXQUFXLENBbUJ2QjtBQW5CWSxrQ0FBVyJ9