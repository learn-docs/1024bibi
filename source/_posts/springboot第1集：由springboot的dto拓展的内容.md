---
title: springboot第1集：由springboot的dto拓展的内容
abbrlink: e5bfb94e
date: 2023-01-01 08:16:44
tags:
	- springboot
categories:
	- springboot
keywords: springboot
description: 由springboot的dto拓展的内容
cover: >-
  https://camo.githubusercontent.com/0c01ea31f4d09521cfeb5e67c381964de2526ad15b2ac474e83a475d2ee2a982/68747470733a2f2f636e2e62696e672e636f6d2f74683f69643d4f48522e5379646e65794e59455f454e2d5553333830373532343932335f5548442e6a7067267069643d687026773d313030302672733d3126633d34
top_img:
---

DTO: **Data Transfer Object**. 通常是在 OpenApi . 即此项目与其他外界项目交互时使用的对象.

在Spring Boot应用程序中，数据传输对象（DTO）最常用于表示业务模型对象或从应用程序或其服务端点传递的数据模型对象。 DTO将这些模型对象中的数据转换为一种便于传输和有效处理的格式。

通常情况下，DTO具有以下几个作用：

1.  将业务模型对象的详细信息隐藏起来，以便在应用程序的客户端和服务端之间进行数据传输。
1.  将多个模型对象合并为一个DTO对象，以便简化数据交换和处理过程。
1.  通过将某些模型对象属性的转换或计算封装到DTO中，可以抽象化服务端点之间的数据处理逻辑。
1.  最终，提供一个整体的清晰，不分双方，简单的数据传输结构。
1.  同样，DTO在优化性能方面也起到了很大的作用。

而Spring Boot可以通过各种注释来高效地创建和使用DTO，这些注释包括`@Data`， `@Getter`， `@Setter`， `@NoArgsConstructor`和`@AllArgsConstructor`等。通过这些注释，可以自动化DTO中的许多任务，这有效地简化了DTO的创建和维护。

```
@Getter
@Setter
@TableName("user")
@ApiModel(value="user_boookdto", description = "")
public class User_BookDto implements Serializable {
 private static final long serialVersionUID = 1L;
 
 @TableId("uid")
 private String uid;
 
 @TableField("uname")
 private String uname;
 
 @TableField("bname")
 private String bname;
 
 @TableField("author")
 private String author;
 
 @TableField("info")
 private String info;
 
 @TableField("imgpos")
 private String imgpos;
}
```

在Service里写好方法，然后在impl里面实现

```js
public interface BookService extends IService<Book> {
 User_BookDto getDataByUserAndBook(User_BookDto user_bookDto);
}
```

实现service

根据前端传过来的数据获取这两个表中的所有信息，然后使用对象拷贝，将两个表中的数据对象拷贝到 dto，最后返回 dto 即可

```
@Service
public class BookServiceImp extends ServiceImpl<BookDao, Book> implements BookService {
 @Autowired
 private UserService userService;
 
 @Override
 public User_BookDto getDataByUserAndBook(User_BookDto user_bookDto) {
  // 获取书的所有信息
  LambdaQueryWrapper<Book> queryWrapper = new LambdaQueryWrapper<>();
  queryWrapper.eq(Book::getBname, user_bookDto.getBname());
  Book book12 = this.getOne(queryWrapper);
  
  // 获取用户的所有信息
  LambdaQueryWrapper<User> queryWrapper2 = new LambdaQueryWrapper<>();
  queryWrapper2.eq(User::getUname, user_bookDto.getUname());
  user user12 = userService.getOne(queryWrapper2);
  
  // 对象拷贝，将book和user拷贝到user_bookDto
  BeanUtils.copyProperties(book12, user_bookDto);
  BeanUtils.copyProperties(user12, user_bookDto);
  
  return user_bookDto;
 }
}
```

最后，在 controller 里调用 service 写好的方法即可

```
@PostMapping("/getub")
public Result<User_BookDto> getBook(@RequestBody User_BookDto user_bookDto) {
 user_bookDto = bookService.getDataByUserAndBook(user_bookDto);
 return Result.success("", user_bookDto);
}
```

在Spring Boot中，`DTO（Data Transfer Object）`是一种对象，用于在各个层之间传递数据。它们通常包含在应用程序中的控制器或服务中，并用于处理RESTful API或Web应用程序中的HTTP请求和响应数据。

DTO可以根据需要进行拓展，以满足不同应用程序的要求。以下是可以拓展DTO的一些内容：

1.  `Validation` 校验

Spring Boot DTO可以使用Bean Validation框架来校验请求数据的格式和有效性。例如，你可以通过在DTO字段上添加@NotBlank和@Email注解来确保输入的字符串不为空并符合电子邮件地址格式。

2.  `Mapping` 映射

使用映射技术可以将一个DTO对象映射到另一个DTO对象，或将DTO对象映射到数据库中的实体对象。例如，你可以使用MapStruct、Dozer或ModelMapper等框架来实现DTO映射功能。

3.  `Builder` 构建

使用Builder模式创建DTO对象可以减少代码的重复程度。通过使用Builder模式，你可以更简单地构建DTO对象，而不必手动编写大量的构造函数和setter方法。具体来说，你可以使用`Lombok`来自动生成DTO对象的构建器。

4.  `Pagination` 分页

在Web应用程序中，常常需要对大量数据进行分页显示。DTO可以包含信息，例如当前页码、页面大小、总数等，以支持分页实现。可以使用`Spring Boot默认的Pageable对象、Mybatis PageHelper`插件等来实现分页。

5.  `Custom Formatting` 自定义格式

有些情况下，DTO对象需要显示更复杂的数据结构，例如日期时间转换、数字格式化等。你可以使用`Spring Boot`中提供的自定义格式注解来实现DTO的自定义格式。 例如，对于日期的处理需要使用`@DateTimeFormat(pattern = "yyyy-MM-dd")`注解进行标记。

6.  `Conversion` 转换

有时候，我们需要将DTO中的一些属性从一种类型转换成另一种类型，例如将字符串转换成数字，或将日期字符串转换为Date对象。你可以使用`Spring Boot`中的`ConversionService`来实现这种类型的转换。

7.  `Localization` 本地化

如果你的应用程序需要支持多个国家或地区的语言，那么DTO可以包含属性键、相应的值和区域设置信息，来支持不同的本地化需求。你可以使用`Spring Boot`的国际化支持来实现这个目标。

8.  `DTO Projection` 投影

`DTO Projection`允许我们选择DTO中的特定属性，并将这些属性映射到视图中。这可以减少不必要的数据传输和处理，从而提高应用程序的性能。你可以使用`Spring Boot`中的`Projection`注解来实现DTO的投影。

9.  `HATEOAS`支持

如果你正在构建RESTful API，则可以将DTO与`HATEOAS（Hypertext As The Engine Of Application State）`相结合，以允许客户端使用API返回的链接来导航应用程序。你可以使用Spring Boot中的Spring HATEOAS框架来实现这种类型的DTO扩展。

`Spring Boot的DTO`（数据传输对象）通常是一个POJO（简单Java对象），主要用于在不同层之间传递数据，以及将数据库实体转换为更易于处理的对象。`DTO`包含以下内容：

1.  可读/可写属性：DTO包含用于表示数据的可读/可写属性，具有`getter和setter`方法。
1.  静态工厂方法：`DTO`通常具有静态工厂方法，用于创建`DTO`对象。
1.  序列化支持：`DTO`需要支持序列化和反序列化，以便它们可以在应用程序各个层之间进行传输。
1.  `Bean`验证注解：DTO可以包含Bean验证注解，用于在传输数据之前验证数据的完整性。
1.  映射注解：DTO可以使用映射注解（`例如@Mapper或@Mapping`）将DTO属性映射到其他对象的属性。
1.  `Spring validation`支持：DTO可以使用Spring验证框架进行自定义验证。

总之，`Spring Boot`的DTO是具有可读/可写属性、静态工厂方法、序列化支持、Bean验证注解、映射注解和Spring验证支持的简单Java对象，用于在不同层之间传输数据。

联系作者vx：xiaoda0423

仓库地址：https://github.com/webVueBlog/JavaGuideInterview