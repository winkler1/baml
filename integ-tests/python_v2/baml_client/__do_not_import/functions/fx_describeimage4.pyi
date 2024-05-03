# This file is generated by the BAML compiler.
# Do not edit this file directly.
# Instead, edit the BAML files and recompile.

# ruff: noqa: E501,F401
# flake8: noqa: E501,F401
# pylint: disable=unused-import,line-too-long
# fmt: off

from ..types.classes.cls_classwithimage import ClassWithImage
from ..types.classes.cls_fakeimage import FakeImage
from ..types.partial.classes.cls_classwithimage import PartialClassWithImage
from ..types.partial.classes.cls_fakeimage import PartialFakeImage
from baml_core.stream import AsyncStream
from typing import Callable, Protocol, runtime_checkable


import typing

import pytest
from contextlib import contextmanager
from unittest import mock

ImplName = typing.Literal["default_config"]

T = typing.TypeVar("T", bound=typing.Callable[..., typing.Any])
CLS = typing.TypeVar("CLS", bound=type)


IDescribeImage4Output = str

@runtime_checkable
class IDescribeImage4(Protocol):
    """
    This is the interface for a function.

    Args:
        classWithImage: ClassWithImage
        img2: Image

    Returns:
        str
    """

    async def __call__(self, *, classWithImage: ClassWithImage, img2: Image) -> str:
        ...

   

@runtime_checkable
class IDescribeImage4Stream(Protocol):
    """
    This is the interface for a stream function.

    Args:
        classWithImage: ClassWithImage
        img2: Image

    Returns:
        AsyncStream[str, str]
    """

    def __call__(self, *, classWithImage: ClassWithImage, img2: Image
) -> AsyncStream[str, str]:
        ...
class BAMLDescribeImage4Impl:
    async def run(self, *, classWithImage: ClassWithImage, img2: Image) -> str:
        ...
    
    def stream(self, *, classWithImage: ClassWithImage, img2: Image
) -> AsyncStream[str, str]:
        ...

class IBAMLDescribeImage4:
    def register_impl(
        self, name: ImplName
    ) -> typing.Callable[[IDescribeImage4, IDescribeImage4Stream], None]:
        ...

    async def __call__(self, *, classWithImage: ClassWithImage, img2: Image) -> str:
        ...

    def stream(self, *, classWithImage: ClassWithImage, img2: Image
) -> AsyncStream[str, str]:
        ...

    def get_impl(self, name: ImplName) -> BAMLDescribeImage4Impl:
        ...

    @contextmanager
    def mock(self) -> typing.Generator[mock.AsyncMock, None, None]:
        """
        Utility for mocking the DescribeImage4Interface.

        Usage:
            ```python
            # All implementations are mocked.

            async def test_logic() -> None:
                with baml.DescribeImage4.mock() as mocked:
                    mocked.return_value = ...
                    result = await DescribeImage4Impl(...)
                    assert mocked.called
            ```
        """
        ...

    @typing.overload
    def test(self, test_function: T) -> T:
        """
        Provides a pytest.mark.parametrize decorator to facilitate testing different implementations of
        the DescribeImage4Interface.

        Args:
            test_function : T
                The test function to be decorated.

        Usage:
            ```python
            # All implementations will be tested.

            @baml.DescribeImage4.test
            async def test_logic(DescribeImage4Impl: IDescribeImage4) -> None:
                result = await DescribeImage4Impl(...)
            ```
        """
        ...

    @typing.overload
    def test(self, *, exclude_impl: typing.Iterable[ImplName] = [], stream: bool = False) -> pytest.MarkDecorator:
        """
        Provides a pytest.mark.parametrize decorator to facilitate testing different implementations of
        the DescribeImage4Interface.

        Args:
            exclude_impl : Iterable[ImplName]
                The names of the implementations to exclude from testing.
            stream: bool
                If set, will return a streamable version of the test function.

        Usage:
            ```python
            # All implementations except the given impl will be tested.

            @baml.DescribeImage4.test(exclude_impl=["implname"])
            async def test_logic(DescribeImage4Impl: IDescribeImage4) -> None:
                result = await DescribeImage4Impl(...)
            ```

            ```python
            # Streamable version of the test function.

            @baml.DescribeImage4.test(stream=True)
            async def test_logic(DescribeImage4Impl: IDescribeImage4Stream) -> None:
                async for result in DescribeImage4Impl(...):
                    ...
            ```
        """
        ...

    @typing.overload
    def test(self, test_class: typing.Type[CLS]) -> typing.Type[CLS]:
        """
        Provides a pytest.mark.parametrize decorator to facilitate testing different implementations of
        the DescribeImage4Interface.

        Args:
            test_class : Type[CLS]
                The test class to be decorated.

        Usage:
        ```python
        # All implementations will be tested in every test method.

        @baml.DescribeImage4.test
        class TestClass:
            def test_a(self, DescribeImage4Impl: IDescribeImage4) -> None:
                ...
            def test_b(self, DescribeImage4Impl: IDescribeImage4) -> None:
                ...
        ```
        """
        ...

BAMLDescribeImage4: IBAMLDescribeImage4